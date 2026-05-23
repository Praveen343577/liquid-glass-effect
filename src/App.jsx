import LiquidGlass from './components/LiquidGlass';
import Draggable from './components/Draggable';
import ScrollMover from './components/ScrollMover';
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
        <ScrollMover speed={0.6}>
          <Draggable>
            <LiquidGlass as="button" className="glass-shape plus-icon" />
          </Draggable>
        </ScrollMover>

        {/* Div Test */}
        <ScrollMover speed={0.4}>
          <Draggable>
            <LiquidGlass as="div" className="glass-shape">
              <h2>Div Element</h2>
            </LiquidGlass>
          </Draggable>
        </ScrollMover>
        
        <ScrollMover speed={0.7}>
          <Draggable>
            <LiquidGlass>
              <div className='glass-shape'>hello</div>
            </LiquidGlass>
          </Draggable>
        </ScrollMover>

        <ScrollMover speed={0.5}>
          <Draggable>
            <LiquidGlass>
              <div className='glass-shape'>hello</div>
            </LiquidGlass>
          </Draggable>
        </ScrollMover>

        {/* Table/TD Test */}
        <table style={{ color: 'white', borderSpacing: '10px' }}>
          <tbody>
            <tr>
              <td>
                <ScrollMover speed={0.3}>
                  <Draggable>
                    <LiquidGlass style={{ padding: '2rem', borderRadius: '1rem' }}>
                      Table Data 1
                    </LiquidGlass>
                  </Draggable>
                </ScrollMover>
              </td>
              <td>
                <ScrollMover speed={0.8}>
                  <Draggable>
                    <LiquidGlass style={{ padding: '2rem', borderRadius: '1rem' }}>
                      Table Data 2
                    </LiquidGlass>
                  </Draggable>
                </ScrollMover>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}