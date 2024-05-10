function fn() {
  for (let i = 0; i < 6; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
fn();
<img
            src={collectPNG}
            className="collect"
            onClick={() => {
              clickHandle();
            }}
          />
          <p
            className="bottom-text"
            onClick={() => {
            clickCollectHandle();
            }}
          ></p>