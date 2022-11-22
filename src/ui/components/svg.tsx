import React from 'react';
import styled from 'styled-components';


export const SvgBook = () => {
  return (
    <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect y="0.5" width="100" height="100" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_14_5105" transform="scale(0.00195312)"/>
        </pattern>
        <image id="image0_14_5105" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABI8SURBVHgB7d1NchRXl4Dhi4NBz8AbaKQVIFaAtAJgBaAVGHrcEaDeADD5pkgrQNpAI1aAtAKS3oDFqCcdVtcpO21ZLlElqfLn5nmeiHLJcoRtJMF58+bNzFIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASuVOoyPn98m/lfuF3/+vHd+re7JXy+k1h2s5mv5PPCr27W6jH3bJ15//Kp8Lc+dfNUja+Fabr35vz8tud80LdYrrPvpXlNN5nr/hde/LH++yf7c/edgu9EwAA3NqSIc8ICQAAVmLIT4sAAOBPhnweAgAgGUOeIAAAJsiQZxkBAFApQ57bEAAAI2bI0xUBADAwQ54hCACAHhjyjI0AAFgTQ56aCACAazDkmQoBAHCJIU8GAgBIyZAnOwEATJYhD1cTAEDVDHm4GQEAjJ4hD+snAIBxODv/fbq3U3428f/rqJT/ODfkoQsCAOjPgiH/o0P5pgBdEQDAel1zyAPDEADA9RnyUD0BACxmyMOkCQDIzJCHtAQATJ0hDywgAGAKDHngmgQA1MKQB9ZIAMCYGPJATwQA9M2QB0ZAAEAXDHlg5AQA3JQhD1RMAMCPGPLARAkAMOSBhAQAORjyAH8jAJgOQx5gZQKAupyflfP5dJ9N9vezqX72myEPcAMCgPG5OOTPZ5P9vP043i9M+fcFgBsSAAxj1SEPQCcEAN0x5AFGSwBwO4Y8QJUEAMsZ8gCTIwBY6Px8NuB/2zXkASZKAHCF2dCPCABgkn4qAEA6AgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQncL1Xjzn3ul+Z+N0oemacrxfxcAJupOoRrn52V79i37VHpwfHxednYKQNf2Z6/dQu+cAgCAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhO4WAG5lY2Nj4ftlTdPM38/OzuYfxzsMRQAALBEDfWtrqzx48KBsbm7O3+Nz9+/fv3LYr6INgXidnp6W4+PjcnJyIgzoxZ1CNc7Py/bsW/ap9OD4+Lzs7BRIox3mMejjPYb89vb2/PPx6lNEwOfPn8vh4eE8CiZuf/baLfROAFREAMDtXRz07VF9O/THKFYHIgIODg6mGgP7RQAMQgBURADA6mLQt4O9hkG/ioiBN2/ezGNgQvaLABiEAKiIAIB/WjTg473vZfs+TSwE9osAGIQAqIgAILPLg74d9lMe9MtECOzu7tZ+amC/CIBBuAoAGI12w11svms34hn0V4uvy6dPn8q7d+/K3t6eqwe4FgEA9K62jXhj9/Lly/L06dPZqt3On/cagGUEANAZg74/7WrAs2fP5pcRwjICAOjEly9f5sOe/rQRECsBIoBlPAsA6IRz9sOIr3tEgPhiGQEA/EMcSb548aJQp4iAjx8/OtXCDzkFAEmtcn5+f3+/UKf4PkYExOkAVwewiACAiRtqI56hM7z4Pr9+/bq8evWqwGUCACbi8hPrHj58eOs74sW/86aXlQmAcYhLBI+OjjI8VIhrEgBQGXfE47revn1bHj16VOAiAQAjFUPdHfFYh/jZef78+dQeIsQtCQAYkBvl0JcJPkWQWxIA0AODnqG1K0r2AtASALBGXWzEg3WJKwIEAC0BADdgIx41ihWA+Bl1hQZBAMAPtMum9+7dM+iZhLjDYzw+GAQA6Tk/TyZPnjwRAMwJANIw6MFpAP4iAJicRRvx4nMGPfwufn/YDIgAoFo24jGU9vbIcRR98Ui6ltB8+vSpAEAAUK945rmjeroSQz6G5Ldv3+Yfn5yczIf9Ks9GiAiNII3l9sePH8/fxyRWxUAAAJ2o4RxzO9BjuMcrhn283/QBSBf/vREP7VF2hGrciS824I1hhSriBAQA0Inv37+Xsehq0K8q/jtx+V0bAnFf/iG1G2L7+vUzTgIAuFJtQ6Id8jHgv379Wk5PT/9cuh+DNgTiPe7KN6Q4DSAAchMAwGTs7u5WsbktVgHCkBEQV8iQ208FgN5FBAwZKzbQIgAABhIrFkOdnojbW5ObAAAYSJyDPzg4KEOwAoAAABjQ4eFhGYIAQAAADCj2AbgvP0MQAAADOzo6Kn2zAoAAABhY3KsA+uY+AJDc0HfJW6dad7YLAIYgACCJKQ36q/z888+lRu7IxxAEAEzM2G+Hyz8JAIYgAKBSFwd9e1QfnzPo6xTftzE8KZA8BACM3KLn0tcw6IXI9fQdAFYdEAAwAlM8Py8AYNwEAPQow0Y86uBnDgEAHbARDxg7AQC3YCMe69L3BkArAAgAWEGtG/GoR98BED/L5CYA4JIY6m/evHF+nt4McfmfeEUAwCXxB+P79+8L9GVra6v0ze2H8TAggIFZAWAIAgBgYH2vAMTwtwKAAIBL3I6Vvj1+/Lj0yfAnCAC4RADUq9bvXd8rAHFfChAAwGTUGADb29u9/39/+fKlgAAAGNCLFy9K36wAEAQA0Am7zJfb2NgoT548KX2yAZCWAAA6IQCWe/78ee/L/58/fy4QBADAAOLo/+XLl6VvHz9+LBAEAMAA3r59O8imRSsAtAQAQM9ev35dnj59Wvrm2RZcJAAAevTLL7/MHzY1hHfv3hVoCQCAnsTwH3IIW/7nIgEA0IM45z/k8D86OrL8z994HDBAh2K3/4cPH+Z3/BuS5X8uEwAAHYgd/rHkH5f6DX2L4jjyPz4+LnCRAABYs7i9b+z0j6P/MRhq0yHjJgBggfiD2/nS+gx5pD2mI/6L4uf44OCgwGUCAJiMe/fulT7FoI/b+cY1/UOf47/K7u5ugUUEAMCKYmVoa2trPuwfP348/3jM9vf3nfvnSgIAmIuj2Xg59fH716Id9vF68ODBfOiPaWl/mfg+7u3tFbiKAIBkFg23eI/PxRHjupaMa3gaYPt1iK/B5uZmefjw4fzvaxr0V4mNf2KOHxEAMFEx3OIVQy2G28VB34cxBcDFQd+GT3xuCoN+kQg5G/9YRgBA5bINtx+JX3NcghebAbN+LSz9syoBAJUw6JeL3fhDPGVvTJ49e2bpn5UIABiRy+fn40g2Np+N5YYyjNurV6/mj/yFVQgAGMCPNuLBTcSyv/v9cx0CADoUgz4G+1Ab8cghhr/b/XJdAgDWwPl5hmL4c1MCAK5h6oPeykRdDH9uQwDAArFk326+a+8CZzgyJoY/tyUAYIHDw8MCYxQ3WIrd/nGzH7gNAQBQibi+f2dnx3X+rMVPBYDRe//+fXn06JHhz9pYAQAYsVjyj7v7eawv62YFAOhEDU8DHLs46o/7Rxj+dMEKANAJAXBzscwfj2U2+OmSFQCAkWh3+Dvqpw9WAAAGFoM/lvvjXv5WTuiLAAAYiMHPkAQAQM9ieT/u5GeZnyEJAIAexMa+g4OD+R38XMvPGAgAgI60Qz+O9B3tMzYCAPiTBx7dTpzHb4f90dGRI31GTQAA3FAM+Bj2Jycn5fPnz/N3qIUAAFgijuxj2MeAj9e3b9/mg9/OfWomAAD+sGjQx7ulfKZIAEBiFwdeO+wyMOhBAEAKWQfe5bhp/97SPQgAmJQYbDHgTk9Py9evX9Md2bb30m9/zQY9XE0AQIUuH9mOceANER3x648b7QDLCQAYsRoGPVAnAQADu7wRr7223IY0oEsCAHpi5zkwJgIA1iz7RjygDgIAbsj5eaBmAgCWMOiBKRIAsEBcSra3tzcf8gY9MEUCABaIJ7s5Zw9M2U8FAEhHAMAC9+/fLwBTJgBgAQFQJ983WJ0AACZDAMDqBAAAJCQAgM64hBLGSwAAnREAMF4CAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAFnBPeWDqBAAscO/evUKdxBusRgAAkyIAYDUCAAASEgAAkJAAADrTNE0BxkkAAEBCAgAAErpbAJbY2NgoW1tb5cGDB+Xo6MjSPkyAAADm4vK5dtDHewz77e3t+ccXRQAA9RMANdn5NDsU+1Z6cXYy+8u7wvRcHPTtUX079Ffh6B+mQQDU5Hi79OdBEQB1i0Efg/3hw4dlc3Pz2oN+EcMfpkMAQOUunp9vj+rjc13cEU8AwHQIAKhEn4MemD4BACOy6ka8oVgBgOkQALBA1wP3thvxhvLtW0+bUIHOCQDoUBcb8YZUwwqAUyKwGgEAa5Dl/LwAgOkQAHAN2TfinZ2dFWAaBAAsEAP9xYsXo9yIN6TrrgDYMwDjJQBggTiy//DhQ+HvrADAdHgaILASlwDCtAgAYCUCAKZFAAAr+f79ewGmQwAAK7ECANMiAICV2AAI0yIAgJVYAYBpEQDASgQATIv7AAArGespgAiTk5OT+U2H4j1ewHICAFjJ0CsAiwZ9fM7eBLgZAQCspI9BG/+NdtDHKy49PD4+dvoBOiAAgKXWPYAvD/r2qN6gh/4IAGCpmw7mX3/9dX4Ef3p6Wr5+/WrQw4gIAGCpm94F8NWrVwUYJ5cBAks5YofpsQIA/M2ijXiHh4cFmBYBAEnZiAe5CQCYuBjo8bIRD7hIAMBEuFEOcB0CACpj0APrIABghC6en49BHx+7Ix6wTgIABmQjHjAUAQA9iEEfg91GPGAsBACskfPzQC0EANyAQQ/UTgDAFWzEA6ZMAJCejXhARgKANGzEA/iLAGBynJ8HWE4AUC2DHuDmBADV2tnZKQDczE8FAEhHAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASuluoxp1y5/i8nG+WHvyr/Gt79vahAKxPM3udzV4nf7y+z17HhUEIgMrMIqAp/WgKwPU15Z9D/uTC5xkJAQDAdTXFkK+eAABgkaYY8pMmAADyaoohn5YAAJi2phjyLCAAAOrXFEOeaxIAAHVoiiHPGgkAgPFoiiFPTwQAQL+aYsgzAgIAYP2aYsgzcgIA4GaaYshTMQEAcLWmGPJMlAAAsmuKIU9CAgDIoCmGPPyNAACmoimGPKxMAAA1aYohD2shAICxaYohD50TAMAQmmLIw6AEANCVphjyMFoCALiNphjyUCUBACzTFEMeJkcAAKEphjykIgAgj6YY8sAfBABMS1MMeWAFAgDq0xRDHrglAQDj1BRDHuiQAIDhNMWQBwYiAKBbTTHkgRESAHB7TTHkgcoIAFhNUwx5YEIEAPylKYY8kIQAIJumGPIAAoBJaoohD/BDAoBaNcWQB7gxAcCYNcWQB+iEAGBoTTHkAXonAOhDUwx5gFERAKxLUwx5gGoIAK6jKYY8wCTcKbDYxuz1pBjyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwuP8HcZuFkTIcVV0AAAAASUVORK5CYII="/>
      </defs>
    </svg>
  )
}


export const SvgBookSmall = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="15" height="15" rx="4" fill="white"/>
      <rect x="3" y="2" width="3" height="3" fill="#0104FF"/>
      <rect x="6" y="2" width="3" height="3" fill="#00FE02"/>
      <rect x="9" y="2" width="3" height="3" fill="#FD0100"/>
      <rect x="3" y="5" width="3" height="5" fill="#FFFF01"/>
      <rect x="3" y="10" width="3" height="3" fill="#FF00FF"/>
      <path d="M12 2L5 3.16129V14L12 12.8387V2Z" fill="black"/>
    </svg>
  )
}


export const SvgLogo = () => {
  return (
    <svg width="194" height="33" viewBox="0 0 194 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_14_5107)">
        <path d="M1.09625 0.833496H22.6441V6.46606H7.68893V13.3848H21.7592V19.0617H7.68893V26.8675H23.5733L22.9096 32.5H1.09625V0.833496ZM25.5768 0.833496H31.5058L44.5141 21.5897V0.833496H50.9298V32.5H45.0451L31.9925 11.9212V32.5H25.5768V0.833496ZM61.8916 6.55476H52.3789V0.833496H78.0414V6.55476H68.5285V32.5H61.8916V6.55476ZM79.5071 0.833496H101.055V6.46606H86.0998V13.3848H100.17V19.0617H86.0998V26.8675H101.984L101.32 32.5H79.5071V0.833496ZM103.988 0.833496H115.182C117.66 0.833496 119.695 1.12917 121.288 1.72052C122.91 2.2823 124.178 3.03626 125.093 3.98241C126.008 4.89899 126.642 5.93385 126.996 7.08697C127.35 8.21051 127.526 9.31928 127.526 10.4133C127.526 12.4534 127.158 14.1683 126.42 15.558C125.683 16.9476 124.444 18.1156 122.704 19.0617L129.119 32.5H121.996L116.686 20.614H110.492V32.5H103.988V0.833496ZM115.624 15.1145C116.657 15.1145 117.512 15.011 118.191 14.804C118.869 14.5675 119.4 14.257 119.783 13.8727C120.196 13.4587 120.477 12.9709 120.624 12.4091C120.771 11.8473 120.845 11.2264 120.845 10.5463C120.845 9.98454 120.757 9.45233 120.58 8.94971C120.403 8.4175 120.093 7.95922 119.651 7.57483C119.238 7.16091 118.648 6.85045 117.881 6.64346C117.143 6.40694 116.199 6.28866 115.049 6.28866H110.492V15.1145H115.624Z" fill="black"/>
        <path d="M130.24 0.833496H141.522C143.941 0.833496 145.932 1.11439 147.495 1.67617C149.088 2.20838 150.342 2.93277 151.256 3.84936C152.201 4.73638 152.849 5.78601 153.203 6.99827C153.587 8.18098 153.778 9.4228 153.778 10.7237C153.778 12.1134 153.587 13.4439 153.203 14.7153C152.849 15.9867 152.201 17.1103 151.256 18.086C150.342 19.0321 149.103 19.7861 147.54 20.3479C146.006 20.9097 144.059 21.1906 141.699 21.1906H136.744V32.5H130.24V0.833496ZM141.478 15.691C142.628 15.691 143.573 15.5728 144.31 15.3362C145.077 15.0997 145.681 14.7744 146.124 14.3605C146.566 13.9466 146.861 13.4439 147.009 12.8526C147.186 12.2317 147.274 11.5664 147.274 10.8568C147.274 10.1176 147.186 9.46715 147.009 8.90536C146.832 8.34356 146.522 7.87052 146.08 7.48613C145.637 7.10174 145.033 6.8061 144.266 6.59911C143.528 6.39212 142.584 6.28866 141.434 6.28866H136.744V15.691H141.478ZM155.887 0.833496H162.479V32.5H155.887V0.833496ZM174.334 15.8241L164.069 0.833496H171.591L178.095 10.9455L184.732 0.833496H191.811L181.723 16.0015L193.05 32.5H185.528L177.874 20.9688L170.529 32.5H163.317L174.334 15.8241Z" fill="#5969E9"/>
      </g>
      <defs>
        <clipPath id="clip0_14_5107">
          <rect width="192.667" height="32" fill="white" transform="translate(0.666687 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  )
}


export const SvgInfo = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
        stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}


export const SvgHeart = () => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="32" height="32" rx="12" fill="#FEE2E2"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17157 11.6716C10.7337 10.1095 13.2663 10.1095 14.8284 11.6716L16 12.8431L17.1716 11.6716C18.7337 10.1095 21.2663 10.1095 22.8284 11.6716C24.3905 13.2337 24.3905 15.7663 22.8284 17.3284L16 24.1569L9.17157 17.3284C7.60948 15.7663 7.60948 13.2337 9.17157 11.6716Z" fill="#EF4444"/>
    </svg>
  )
}


export const SvgPhoto = () => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="32" height="32" rx="12" fill="#CCFBF1"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 9.5C8.89543 9.5 8 10.3954 8 11.5V21.5C8 22.6046 8.89543 23.5 10 23.5H22C23.1046 23.5 24 22.6046 24 21.5V11.5C24 10.3954 23.1046 9.5 22 9.5H10ZM22 21.5H10L14 13.5L17 19.5L19 15.5L22 21.5Z" fill="#14B8A6"/>
    </svg>
  )
}


export const SvgDiscord = () => {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9307 1.24339C15.6557 0.668393 14.2891 0.243393 12.8599 0.00172605C12.8472 -0.000717354 12.834 0.000857264 12.8222 0.00623216C12.8104 0.0116071 12.8006 0.0205163 12.7941 0.0317261C12.6191 0.339226 12.4241 0.740059 12.2874 1.05673C10.7717 0.830257 9.23067 0.830257 7.71491 1.05673C7.56269 0.705777 7.39104 0.36358 7.20075 0.0317261C7.19429 0.0203783 7.18454 0.0112675 7.17277 0.00560949C7.16101 -4.85347e-05 7.1478 -0.00198477 7.13491 5.93057e-05C5.70658 0.241726 4.33991 0.666726 3.06408 1.24256C3.0531 1.24716 3.0438 1.25501 3.03741 1.26506C0.444079 5.07756 -0.266754 8.79589 0.0824122 12.4676C0.0833839 12.4766 0.0861752 12.4853 0.0906163 12.4931C0.0950575 12.501 0.101056 12.5079 0.108246 12.5134C1.62191 13.6154 3.31019 14.4549 5.10241 14.9967C5.11491 15.0006 5.12827 15.0006 5.14076 14.9967C5.15324 14.9928 5.16428 14.9853 5.17241 14.9751C5.55807 14.4593 5.89983 13.9121 6.19408 13.3392C6.19816 13.3314 6.20052 13.3228 6.20098 13.314C6.20144 13.3051 6.20001 13.2963 6.19677 13.2881C6.19353 13.2799 6.18856 13.2725 6.1822 13.2663C6.17584 13.2602 6.16824 13.2555 6.15991 13.2526C5.62158 13.0498 5.09998 12.8052 4.59991 12.5209C4.59093 12.5158 4.58335 12.5085 4.57788 12.4997C4.5724 12.4909 4.56918 12.4809 4.56852 12.4706C4.56786 12.4603 4.56978 12.45 4.57409 12.4405C4.5784 12.4311 4.58499 12.423 4.59325 12.4167C4.69825 12.3392 4.80325 12.2584 4.90325 12.1776C4.91225 12.1703 4.92309 12.1657 4.93457 12.1642C4.94604 12.1627 4.9577 12.1645 4.96825 12.1692C8.24075 13.6392 11.7849 13.6392 15.0191 12.1692C15.0297 12.1642 15.0414 12.1622 15.0531 12.1635C15.0647 12.1649 15.0757 12.1694 15.0849 12.1767C15.1849 12.2584 15.2891 12.3392 15.3949 12.4167C15.4032 12.4228 15.4099 12.4309 15.4144 12.4402C15.4188 12.4496 15.4209 12.4598 15.4204 12.4702C15.4199 12.4805 15.4169 12.4905 15.4116 12.4994C15.4062 12.5082 15.3988 12.5156 15.3899 12.5209C14.8916 12.8076 14.3732 13.0501 13.8291 13.2517C13.8207 13.2548 13.8131 13.2595 13.8067 13.2658C13.8004 13.272 13.7954 13.2795 13.7922 13.2877C13.789 13.296 13.7875 13.3049 13.788 13.3138C13.7885 13.3227 13.7908 13.3313 13.7949 13.3392C14.0949 13.9117 14.4382 14.4567 14.8157 14.9742C14.8236 14.9848 14.8345 14.9928 14.8471 14.997C14.8596 15.0011 14.8731 15.0013 14.8857 14.9976C16.681 14.4573 18.3721 13.6174 19.8874 12.5134C19.8948 12.5082 19.901 12.5015 19.9056 12.4938C19.9102 12.486 19.9131 12.4774 19.9141 12.4684C20.3307 8.22339 19.2157 4.53506 16.9566 1.26673C16.951 1.2561 16.9419 1.24783 16.9307 1.24339ZM6.68325 10.2317C5.69825 10.2317 4.88575 9.34089 4.88575 8.24839C4.88575 7.15506 5.68241 6.26506 6.68325 6.26506C7.69158 6.26506 8.49658 7.16256 8.48075 8.24839C8.48075 9.34173 7.68408 10.2317 6.68325 10.2317ZM13.3291 10.2317C12.3432 10.2317 11.5316 9.34089 11.5316 8.24839C11.5316 7.15506 12.3274 6.26506 13.3291 6.26506C14.3374 6.26506 15.1424 7.16256 15.1266 8.24839C15.1266 9.34173 14.3382 10.2317 13.3291 10.2317Z" fill="#5865F2"/>
    </svg>
  )
}


export const SvgArrow = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.37575 8.82426C4.14143 8.58995 4.14143 8.21005 4.37575 7.97574L6.35148 6L4.37575 4.02426C4.14143 3.78995 4.14143 3.41005 4.37575 3.17574C4.61006 2.94142 4.98996 2.94142 5.22428 3.17574L7.62428 5.57574C7.85859 5.81005 7.85859 6.18995 7.62428 6.42426L5.22428 8.82426C4.98996 9.05858 4.61006 9.05858 4.37575 8.82426Z" fill="#9CA3AF"/>
    </svg>
  )
}


const Button = styled.button`
  background-color: #FFFFFF;
  
  &:hover {
    background-color: #AAAAAA;
  }
`;


const A = styled.a`
  margin-top: 8px;
  
  &:hover {
    opacity: 0.8;
  }
`;
