import LiquidGlass from './components/LiquidGlass';
import './index.css';

export default function App() {
  return (
    <>
      <div className="bg">
        <img src="https://i.ibb.co/bMvc7Zr6/Vibrant-Summer-Meadow-Watercolor.png" alt="" />
        <img src="https://i.ibb.co/ZRH04pV3/Vibrant-Summer-Meadow-Watercolor-1.png" alt="" />
        <img src="https://i.ibb.co/bMvc7Zr6/Vibrant-Summer-Meadow-Watercolor.png" alt="" />
      </div>

      <div className="layout">
        {/* Original Button Mimic */}
        <LiquidGlass as="button" className="glass-shape plus-icon" />

        {/* Div Test */}
        <LiquidGlass as="div" className="glass-shape">
          <h2>Div Element</h2>
        </LiquidGlass>
        
        <LiquidGlass>
          <div className='glass-shape'>hello</div>
        </LiquidGlass>

        <LiquidGlass>
          <div className='glass-shape'>hello</div>
        </LiquidGlass>

        {/* Table/TD Test */}
        <table style={{ color: 'white', borderSpacing: '10px' }}>
          <tbody>
            <tr>
              <LiquidGlass as="td" style={{ padding: '2rem', borderRadius: '1rem' }}>
                Table Data 1
              </LiquidGlass>
              <LiquidGlass as="td" style={{ padding: '2rem', borderRadius: '1rem' }}>
                Table Data 2
              </LiquidGlass>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}