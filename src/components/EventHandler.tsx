function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function EventHandler() {
  function onPlay() {
    alert("Playing!");
  }

  return (
    <div>
      <Button onSmash={onPlay}>Play Movie</Button>
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
