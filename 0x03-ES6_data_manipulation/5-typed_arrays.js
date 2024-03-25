export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Creating a new ArrayBuffer
  const buffer = new ArrayBuffer(length);

  // Creating a DataView to manipulate the buffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the created ArrayBuffer
  return view;
}
