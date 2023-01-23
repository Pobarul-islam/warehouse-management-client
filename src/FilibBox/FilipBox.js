import React from 'react';
import './FilipBox.css';
const FilipBox = () => {
    return (
      <div>
        <body>
          <div class="wrapper">
            <div class="box">
              <div class="front-face">
                <div class="icon">
                  <i class="fas fa-code"></i>
                </div>
                <span>Web Design</span>
              </div>
              <div class="back-face">
                <span>Web Design</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  in deleniti vitae beatae veritatis aliquid porro perspiciatis
                  dolores impedit ad.
                </p>
              </div>
            </div>
            <div class="box">
              <div class="front-face">
                <div class="icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <span>Advertising</span>
              </div>
              <div class="back-face">
                <span>Advertising</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  in deleniti vitae beatae veritatis aliquid porro perspiciatis
                  dolores impedit ad.
                </p>
              </div>
            </div>
            <div class="box">
              <div class="front-face">
                <div class="icon">
                  <i class="fas fa-rocket"></i>
                </div>
                <span>Game Design</span>
              </div>
              <div class="back-face">
                <span>Game Design</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  in deleniti vitae beatae veritatis aliquid porro perspiciatis
                  dolores impedit ad.
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
};

export default FilipBox;