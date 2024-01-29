import path from "path";
import fs from "fs";

export const LAST_CURSOR_FILENAME = 'last-cursor.txt'
export const BLOCK_NUMBERS_FILENAME = 'block-number.json'

export function createBlockNumberFile(blockNumbersData: BlockNumberDataProps) {
  const blockNumberFile = path.join(__dirname, '..', '..', BLOCK_NUMBERS_FILENAME);

  fs.writeFileSync(blockNumberFile, JSON.stringify(blockNumbersData, null, 2), { encoding: 'utf8' });

  return { blockNumberFile, blockNumbersData };
}

export function getBlockNumbers() {
  const blockNumberFile = path.join(__dirname, '..', '..', BLOCK_NUMBERS_FILENAME);
  const blockNumberFileContent = fs.readFileSync(blockNumberFile, { encoding: 'utf8' });

  return JSON.parse(blockNumberFileContent) as unknown as BlockNumberDataProps;
}

export function createLastCursorFile(activeCursor: string) {
  const lastPersistentCursor = path.join(__dirname, '..', '..', LAST_CURSOR_FILENAME);

  fs.writeFileSync(lastPersistentCursor, activeCursor, { encoding: 'utf8' });
}

export function getLastCursor() {
  const lastPersistentCursor = path.join(__dirname, '..', '..', LAST_CURSOR_FILENAME);

  if (!lastPersistentCursor) return ''

  const lastPersistentCursorContent = fs.readFileSync(lastPersistentCursor, { encoding: 'utf8' }).toString();

  console.log('📘::getLastCursor::📘::lastPersistentCursor, start back at cursor ', lastPersistentCursorContent)
  return lastPersistentCursorContent;
}

export interface BlockNumberDataProps {
  lowestBlockNumber: number,
  highestBlockNumber: number
}
