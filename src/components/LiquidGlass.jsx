import { useState, useEffect, useId, createElement } from 'react';

let globalBase64 = null;
let globalBase64Promise = null;

export default function LiquidGlass({ as = 'div', children, className = '', style = {}, ...props }) {
  const [base64, setBase64] = useState(globalBase64);
  const rawId = useId().replace(/:/g, '');
  const filterId = `frosted-${rawId}`;
  const elemId = `lg-elem-${rawId}`;

  useEffect(() => {
    if (!globalBase64Promise) {
      globalBase64Promise = fetch('/base64.txt')
        .then((res) => res.text())
        .then((text) => {
          const clean = text.trim();
          globalBase64 = clean;
          return clean;
        })
        .catch((err) => {
          console.error("Error fetching base64:", err);
          globalBase64Promise = null;
        });
    }

    if (globalBase64Promise) {
      globalBase64Promise.then((clean) => {
        if (clean) {
          setBase64(clean);
        }
      });
    }
  }, []);

  const baseStyles = {
    background: 'rgba(255,255,255,.08)',
    border: '2px solid transparent',
    boxShadow: '0 0 0 2px rgba(255,255,255,.6), 0 16px 32px rgba(0,0,0,.12)',
    backdropFilter: `url(#${filterId})`,
    WebkitBackdropFilter: `url(#${filterId})`,
    cursor: 'pointer',
    outline: '0',
    ...style,
  };

  const element = createElement(
    as,
    {
      id: elemId,
      className: `liquid-glass ${className}`.trim(),
      style: baseStyles,
      ...props,
    },
    children
  );

  return (
    <>
      {element}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id={filterId} primitiveUnits="objectBoundingBox">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur" />
          {base64 && (
            <>
              <feImage
                href={`data:image/png;base64,${base64}`}
                x="0"
                y="0"
                width="1"
                height="1"
                result="map"
              />
              <feDisplacementMap
                in="blur"
                in2="map"
                scale="1"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate attributeName="scale" to="1.4" dur="0.3s" begin={`${elemId}.mouseover`} fill="freeze" />
                <animate attributeName="scale" to="1" dur="0.3s" begin={`${elemId}.mouseout`} fill="freeze" />
              </feDisplacementMap>
            </>
          )}
        </filter>
      </svg>
    </>
  );
}