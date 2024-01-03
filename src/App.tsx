import Profile from './components/Profile';
import './App.css'
import Avatar from './components/Avatar';

export default function App() {
  const name = 'Manik';

  return (
    <section>
      {name}
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Avatar size={100} person={{name: 'Manik', imageId: 'YfeOqp2'}}/>
    </section>
  );
}
