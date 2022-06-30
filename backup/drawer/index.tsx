import React, { ReactElement, useEffect } from 'react';

type FunType = () => void;
interface IProps {
  show: boolean;
  onShow: FunType;
  children?: ReactElement[] | ReactElement;
}
const Drawer: React.FC<IProps> = (props: IProps) => {
  const { show, onShow, children } = props;
  const closeModal = () => {
    onShow();
  };
  const shadeShow = (showShade: boolean) => {
    const modal = document.getElementById('TaskList');
    const shade = document.getElementById('shade');
    if (showShade) {
      // 加一层判断更严谨，在dom存在时
      if (modal && shade) {
        shade.style.height = '100vh';
        modal.style.height = 'auto';
        modal.style.transformOrigin = 'bottom';
        modal.style.transform = 'scaleY(1)';
      }
    } else if (modal && shade) {
      modal.style.height = '0';
      shade.style.height = '0';
      modal.style.transform = 'scaleY(0)';
    }
  };

  useEffect(() => {
    shadeShow(show);
  }, [show]);

  return (
    <div style={{ zIndex:0,
      width:'100%',
      height:'100vh'}}>
      <div id="shade" style={{
        position:'absolute',
        top:0,
        left:0,
        zIndex:2,
        width:'100%',
        height:0,
        backgroundColor: 'rgba(29,33,41,0.2)',
        display:'block'
      }} onClick={closeModal}></div>
      <div id="TaskList" style={{
         position: 'absolute',
         bottom:0,
         left:0,
         height: 0,
         width :'100%',
         zIndex:3,
         backgroundColor: 'white',
         display:'block',
         maxHeight: '100vh',
         overflowY: 'scroll',
         transform: 'scaleY(0)',
         transformOrigin: 'bottom',
         transition: 'transform .6s ease'
      }}>
        <div style={{
          width:'100%',
          height: '22px'
        }}>
          <div style={{
            position: 'fixed',
            width: 'auto',
            height: 'auto',
            right: 0
          }} onClick={closeModal}>
            X
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
