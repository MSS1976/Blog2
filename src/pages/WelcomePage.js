import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <h2>Bienvenido a mi blog</h2>
      <button onClick={() => navigate('/blog')}>Entrar al Blog</button>
    </div>
  );
}
export default WelcomePage;
