import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '..', 'public', 'favicon.ico')

// Code2 lucide paths on 24x24 viewBox, +1px padding each side
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26" width="64" height="64">
  <rect x="-1" y="-1" width="26" height="26" rx="5" fill="#0c0d14"/>
  <g fill="none" stroke="#7264d8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m18 16 4-4-4-4"/>
    <path d="m6 8-4 4 4 4"/>
    <path d="m14.5 4-5 16"/>
  </g>
</svg>`

function encodeIco(pngBuffers, sizes) {
  const count = pngBuffers.length
  const dirSize = 6 + count * 16
  const offsets = []
  let offset = dirSize
  for (const buf of pngBuffers) {
    offsets.push(offset)
    offset += buf.length
  }
  const ico = Buffer.alloc(offset)
  ico.writeUInt16LE(0, 0)
  ico.writeUInt16LE(1, 2)
  ico.writeUInt16LE(count, 4)
  for (let i = 0; i < count; i++) {
    const e = 6 + i * 16
    const s = sizes[i] >= 256 ? 0 : sizes[i]
    ico.writeUInt8(s, e)
    ico.writeUInt8(s, e + 1)
    ico.writeUInt8(0, e + 2)
    ico.writeUInt8(0, e + 3)
    ico.writeUInt16LE(1, e + 4)
    ico.writeUInt16LE(32, e + 6)
    ico.writeUInt32LE(pngBuffers[i].length, e + 8)
    ico.writeUInt32LE(offsets[i], e + 12)
  }
  for (let i = 0; i < count; i++) {
    pngBuffers[i].copy(ico, offsets[i])
  }
  return ico
}

const sizes = [16, 32, 48]
const pngBuffers = await Promise.all(
  sizes.map(size =>
    sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toBuffer()
  )
)

const ico = encodeIco(pngBuffers, sizes)
writeFileSync(outputPath, ico)
console.log(`favicon.ico written (${ico.length} bytes) — sizes: ${sizes.join(', ')}px`)
