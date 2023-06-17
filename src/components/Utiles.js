export function getUsernameFromEmail(email) {
    const regex = /^([^@]+)@/;
    const match = email.match(regex);
  
    if (match && match.length > 1) {
      return match[1];
    }
  
    return null;
  }