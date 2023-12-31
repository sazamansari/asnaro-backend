import * as crypto from 'crypto';

export const generateHashString = (length = 12) => {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
};

export const formatTime = (inputTime: string | number | Date) => {
    const date = new Date(inputTime);
    if (isNaN(date.getTime())) {
        return null;
    }
    return date.toISOString().split('T')[1].split('.')[0]; // Formats as 'HH:MM:SS'
};