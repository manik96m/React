import Profile from "./components/Profile";
import "./App.css";
import Avatar from "./components/Avatar";
import PackingList from "./components/ConditionalRendering";
import EventHandler from "./components/EventHandler";
import Gallery from "./components/State";

export default function App() {
  const name = "Manik";

  return (
    <section>
      {name}
      <h1>Amazing scientists</h1>
      <Profile />
      <Avatar size={100} person={{ name: "Manik", imageId: "YfeOqp2" }} />

      <PackingList />

      <EventHandler />

      <Gallery />
    </section>
  );
}
