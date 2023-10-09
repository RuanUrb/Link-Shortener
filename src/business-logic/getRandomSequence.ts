function generateRandomAlphanumeric(length: number): string {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      result += alphanumericChars.charAt(randomIndex);
    }
  
    return result;
  }
  
  export default function generateRandomSequence(): string {
    const minLength = 5;
    const maxLength = 10;
    const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    
    return generateRandomAlphanumeric(randomLength);
  }
  