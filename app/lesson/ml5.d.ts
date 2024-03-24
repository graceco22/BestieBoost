// ml5.d.ts

// Define interfaces or types for ml5 objects and methods
interface ML5ImageClassifier {
    // Define ml5.js image classifier methods
    imageClassifier(model: string, video: HTMLVideoElement, callback: (error: any, results: any) => void): void;
    // Add other methods as needed
}

// Declare ml5 module
declare module 'ml5' {
    // Export ml5 object with defined methods
    const ml5: {
        imageClassifier: ML5ImageClassifier;
        // Add other ml5 methods or objects here
    };
    export default ml5;
}
