abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract sky(): void; // Abstract method (must be implemented in subclass)
}
class Instagram extends TakePhoto {
  // Concrete class extending the abstract class
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter); // Call to parent constructor
  }
  sky(): void {
    // Implementation of the abstract method
    console.log("my name is sky");
  }
}

const sky = new Instagram("test", "test");

// ❌ Error: Cannot create an instance of an abstract class
// const sky = new TakePhoto("test", "test");

// 💡 Abstract Class in TypeScript – Definition:
// An abstract class is a class that cannot be instantiated directly
// and is meant to be inherited by other classes.
// It can contain:
// Abstract methods (methods without implementation)
// Concrete methods (methods with implementation)
// Properties (just like regular classes)

// ✅ Key Points:
// You cannot create an object from an abstract class.
// Subclasses must implement all abstract methods from the abstract class.
// It is useful when you want to enforce a structure or behavior across multiple subclasses.

export {};
