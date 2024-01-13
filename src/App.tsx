import Profile from "./components/Profile";
import "./App.css";
import Avatar from "./components/Avatar";
import PackingList from "./components/ConditionalRendering";
import EventHandler from "./components/EventHandler";
import Gallery from "./components/State";
import CounterBatchUpdate from "./components/BatchUpdate";
import CounterQueueUpdate from "./components/QueueUpdate";
import BucketList from "./components/UpdatingObjectsInsideArrays";
import TaskApp from "./components/ExtractingStateToReducer/ExtractingStateToReducer";
import UsingContext from "./components/UsingContext/UsingContext";
import WeatherApp from "./weather-app/App";

export default function App() {
  const name = "Manik";

  return <WeatherApp />;

  return (
    <section>
      {name}
      <h1>Amazing scientists</h1>
      <Profile />
      <Avatar size={100} person={{ name: "Manik", imageId: "YfeOqp2" }} />

      <PackingList />

      <EventHandler />

      <Gallery />

      <CounterBatchUpdate />
      <CounterQueueUpdate />

      <BucketList />

      <TaskApp />

      <UsingContext />
    </section>
  );
}
