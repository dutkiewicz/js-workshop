export const FIREBASE_URL: string = 'https://frontend-workshop.firebaseio.com/zborowski/';
export const PICSUM_URL: string = "https://picsum.photos/";

export const random = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (
        max - min + 1
    )) + min;
};