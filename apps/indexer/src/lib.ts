import fs from 'fs/promises'

export async function writeToFile(data:string, filePath:string) {
  try {
    // Write the data to the specified file
    // If the file does not exist, it will be created.
    await fs.writeFile(filePath, data, 'utf8');
    
    console.log('Logs have been written to the file successfully.');
  } catch (error) {
    console.error('Error writing logs to file:', error);
  }
}