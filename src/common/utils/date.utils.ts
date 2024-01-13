export const randomDateGenerator = (start: Date, end: Date) => 
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
