import React from 'react';


export default function Navbar(){
    return (
      <nav className="navbar">
        <div className="logo">

         <svg width="150" height="200" viewBox="0 0 314 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="42.7891" width="40" height="3.60827" fill="white"/>
<rect x="25" y="55.4141" width="15" height="3.60827" fill="white"/>
<path d="M224.57 44.1843C224.57 41.9389 226.127 40.3516 228.228 40.3516C230.563 40.3516 232.002 42.1324 231.73 44.4553H226.088C226.166 45.8878 227.061 46.7008 228.267 46.7008C229.24 46.7008 229.94 46.2362 230.096 45.5006H231.691C231.38 46.8943 230.173 48.0171 228.267 48.0171C226.01 47.9784 224.57 46.4298 224.57 44.1843ZM230.135 43.2939C230.096 42.2486 229.356 41.5904 228.228 41.5904C227.138 41.5904 226.399 42.2099 226.166 43.2939H230.135Z" fill="white"/>
<path d="M235.229 45.3855L233.517 47.902H231.766L234.334 44.0692L231.882 40.4688H233.672L235.19 42.7142L236.707 40.4688H238.497L236.085 44.0305L238.692 47.902H236.863L235.229 45.3855Z" fill="white"/>
<path d="M239.469 40.4681H241.025V41.5521C241.492 40.8552 242.465 40.3906 243.515 40.3906C245.617 40.3906 247.095 41.9005 247.095 44.2234C247.095 46.5463 245.617 48.0561 243.515 48.0561C242.465 48.0561 241.492 47.5916 241.025 46.8947V50.379H239.469V40.4681ZM243.243 46.6624C244.566 46.6624 245.5 45.6558 245.5 44.1847C245.5 42.7135 244.566 41.6682 243.243 41.6682C241.92 41.6682 240.986 42.6748 240.986 44.1847C240.986 45.6945 241.92 46.6624 243.243 46.6624Z" fill="white"/>
<path d="M247.922 44.1843C247.922 41.9389 249.478 40.3516 251.58 40.3516C253.914 40.3516 255.354 42.1324 255.081 44.4553H249.439C249.517 45.8878 250.412 46.7008 251.618 46.7008C252.591 46.7008 253.292 46.2362 253.447 45.5006H255.043C254.731 46.8943 253.525 48.0171 251.618 48.0171C249.362 47.9784 247.922 46.4298 247.922 44.1843ZM253.486 43.2939C253.447 42.2486 252.708 41.5904 251.58 41.5904C250.49 41.5904 249.751 42.2099 249.517 43.2939H253.486Z" fill="white"/>
<path d="M256.32 40.4677H257.877V41.6291C258.266 40.8936 259.161 40.3516 260.095 40.3516C260.406 40.3516 260.756 40.3903 260.99 40.5064V41.9776C260.678 41.8614 260.367 41.8227 260.017 41.8227C258.85 41.8227 257.916 42.868 257.916 45.1135V47.9009H256.359V40.4677H256.32Z" fill="white"/>
<path d="M262.543 37.7188C263.088 37.7188 263.477 38.1059 263.477 38.6479C263.477 39.1512 263.088 39.5383 262.543 39.5383C261.998 39.5383 261.609 39.1512 261.609 38.6479C261.609 38.1059 261.998 37.7188 262.543 37.7188ZM261.765 40.4675H263.321V47.9007H261.765V40.4675Z" fill="white"/>
<path d="M264.531 44.1843C264.531 41.9389 266.088 40.3516 268.189 40.3516C270.524 40.3516 271.963 42.1324 271.691 44.4553H266.049C266.127 45.8878 267.022 46.7008 268.228 46.7008C269.201 46.7008 269.901 46.2362 270.057 45.5006H271.652C271.341 46.8943 270.134 48.0171 268.228 48.0171C265.971 47.9784 264.531 46.4298 264.531 44.1843ZM270.096 43.2939C270.057 42.2486 269.317 41.5904 268.189 41.5904C267.099 41.5904 266.36 42.2099 266.127 43.2939H270.096Z" fill="white"/>
<path d="M272.938 40.4677H274.494V41.5904C274.922 40.8936 275.895 40.3516 276.984 40.3516C278.58 40.3516 279.786 41.3969 279.786 42.9842V47.9009H278.229V43.3713C278.229 42.3647 277.607 41.7453 276.634 41.7453C275.389 41.7453 274.494 42.7132 274.494 44.5715V47.9009H272.938V40.4677Z" fill="white"/>
<path d="M280.875 44.1843C280.875 41.9389 282.431 40.3516 284.61 40.3516C286.478 40.3516 287.801 41.3969 288.035 43.0616H286.478C286.323 42.2486 285.583 41.6679 284.61 41.6679C283.365 41.6679 282.431 42.6744 282.431 44.1843C282.431 45.6942 283.365 46.7008 284.61 46.7008C285.622 46.7008 286.4 46.0813 286.517 45.307H288.074C287.918 46.8556 286.556 48.0171 284.572 48.0171C282.431 47.9784 280.875 46.3911 280.875 44.1843Z" fill="white"/>
<path d="M288.773 44.1843C288.773 41.9389 290.33 40.3516 292.431 40.3516C294.766 40.3516 296.244 42.1324 295.933 44.4553H290.291C290.369 45.8878 291.264 46.7008 292.47 46.7008C293.443 46.7008 294.143 46.2362 294.299 45.5006H295.894C295.583 46.8943 294.377 48.0171 292.47 48.0171C290.213 47.9784 288.773 46.4298 288.773 44.1843ZM294.338 43.2939C294.299 42.2486 293.559 41.5904 292.431 41.5904C291.342 41.5904 290.602 42.2099 290.369 43.2939H294.338Z" fill="white"/>
<path d="M224.57 56.651C224.57 54.3281 226.049 52.8182 228.15 52.8182C229.201 52.8182 230.173 53.2828 230.64 53.9796V50.8438H232.197V60.3288H230.64V59.2836C230.173 59.9804 229.201 60.445 228.15 60.445C226.01 60.4837 224.57 58.9738 224.57 56.651ZM228.384 59.1287C229.707 59.1287 230.64 58.1221 230.64 56.651C230.64 55.1798 229.707 54.1345 228.384 54.1345C227.061 54.1345 226.127 55.1411 226.127 56.651C226.127 58.1221 227.022 59.1287 228.384 59.1287Z" fill="white"/>
<path d="M233.359 56.6492C233.359 54.4037 234.916 52.8164 237.017 52.8164C239.352 52.8164 240.791 54.5973 240.519 56.9202H234.877C234.955 58.3526 235.85 59.1656 237.056 59.1656C238.029 59.1656 238.729 58.701 238.885 57.9655H240.48C240.169 59.3592 238.963 60.4819 237.056 60.4819C234.799 60.4819 233.359 58.8946 233.359 56.6492ZM238.963 55.7587C238.924 54.7134 238.184 54.0553 237.056 54.0553C235.966 54.0553 235.227 54.6747 234.994 55.7587H238.963Z" fill="white"/>
<path d="M241.297 57.9658H242.814C242.892 58.7401 243.476 59.2434 244.371 59.2434C245.188 59.2434 245.694 58.8562 245.694 58.2368C245.694 56.6495 241.53 57.6561 241.53 54.9461C241.53 53.7846 242.581 52.8555 244.137 52.8555C245.849 52.8555 246.9 53.7072 247.056 55.1009H245.577C245.46 54.4428 244.955 54.0556 244.176 54.0556C243.515 54.0556 243.048 54.3653 243.048 54.8686C243.048 56.3011 247.25 55.2558 247.25 58.1594C247.25 59.5531 246.083 60.4435 244.449 60.4435C242.581 60.4823 241.414 59.4757 241.297 57.9658Z" fill="white"/>
<path d="M249.121 50.1836C249.666 50.1836 250.055 50.5707 250.055 51.1127C250.055 51.616 249.666 52.0032 249.121 52.0032C248.577 52.0032 248.188 51.616 248.188 51.1127C248.188 50.5707 248.616 50.1836 249.121 50.1836ZM248.343 52.9323H249.9V60.3656H248.343V52.9323Z" fill="white"/>
<path d="M251.42 60.6371H252.977C253.171 61.2953 253.794 61.6824 254.806 61.6824C256.09 61.6824 256.868 60.9856 256.868 59.7854V58.9724C256.401 59.6305 255.467 60.0564 254.494 60.0564C252.471 60.0564 251.031 58.624 251.031 56.4947C251.031 54.2879 252.432 52.8555 254.455 52.8555C255.467 52.8555 256.362 53.2813 256.868 53.9008V52.9329H258.385V59.708C258.385 61.7598 256.829 62.8826 254.728 62.8826C252.977 62.9213 251.654 61.9921 251.42 60.6371ZM254.767 58.7401C256.012 58.7401 256.907 57.7722 256.907 56.4559C256.907 55.1009 256.012 54.1718 254.767 54.1718C253.522 54.1718 252.627 55.1396 252.627 56.4559C252.627 57.7722 253.522 58.7401 254.767 58.7401Z" fill="white"/>
<path d="M259.977 52.9325H261.533V54.0553C261.961 53.3584 262.934 52.8164 264.023 52.8164C265.619 52.8164 266.825 53.8617 266.825 55.449V60.3658H265.268V55.8361C265.268 54.8296 264.646 54.2101 263.673 54.2101C262.428 54.2101 261.533 55.178 261.533 57.0363V60.3658H259.977V52.9325Z" fill="white"/>
<path d="M98.5509 57.0464C101.275 57.0464 103.259 55.6913 103.259 53.5233C103.259 47.6774 89.5625 50.8907 89.5625 42.0638C89.5625 37.96 93.1812 35.25 97.9673 35.25H106.061V38.8118H97.9284C95.3213 38.8118 93.726 39.9732 93.726 41.8702C93.726 46.9805 107.423 43.7285 107.423 53.291C107.423 57.6658 103.687 60.6081 98.512 60.6081V57.0464H98.5509Z" fill="white"/>
<path d="M110.336 40.7433H114.422V43.5695C115.667 41.7112 118.235 40.4336 120.998 40.4336C126.601 40.4336 130.453 44.3825 130.453 50.5381C130.453 56.6938 126.562 60.6427 120.959 60.6427C118.196 60.6427 115.667 59.3651 114.422 57.5455V66.7983H110.336V40.7433ZM120.375 57.1196C123.916 57.1196 126.367 54.4483 126.367 50.5381C126.367 46.6279 123.916 43.9179 120.375 43.9179C116.873 43.9179 114.422 46.6279 114.422 50.5381C114.422 54.4483 116.873 57.1196 120.375 57.1196Z" fill="white"/>
<path d="M135.428 33.4258C136.868 33.4258 137.918 34.4711 137.918 35.8261C137.918 37.2198 136.868 38.1877 135.428 38.1877C133.988 38.1877 132.938 37.1811 132.938 35.8261C132.938 34.4711 133.988 33.4258 135.428 33.4258ZM133.366 40.7429H137.451V60.3712H133.366V40.7429Z" fill="white"/>
<path d="M141.383 40.7398H145.468V43.7208C146.636 41.8625 149.204 40.4688 152.044 40.4688C156.247 40.4688 159.398 43.2175 159.398 47.3987V60.3681H155.313V48.4053C155.313 45.7727 153.679 44.0692 151.11 44.0692C147.803 44.0692 145.429 46.6244 145.429 51.5412V60.3681H141.344V40.7398H141.383Z" fill="white"/>
<path d="M162.32 55.0248C162.32 51.463 164.888 49.2176 170.647 48.5594L175.394 48.0174V47.4754C175.394 45.0751 173.566 43.6427 170.997 43.6427C168.39 43.6427 166.639 45.0751 166.367 47.4367H162.359C162.904 43.4104 166.328 40.3906 170.959 40.3906C175.9 40.3906 179.441 43.1394 179.441 47.94V60.29H175.394V57.3864C174.499 59.2834 172.009 60.561 169.169 60.561C164.966 60.6384 162.32 58.4704 162.32 55.0248ZM169.674 57.4251C173.021 57.4251 175.355 55.1796 175.355 51.3082V51.1533L170.686 51.6953C167.768 52.005 166.367 53.1665 166.367 54.9086C166.406 56.3798 167.768 57.4251 169.674 57.4251Z" fill="white"/>
<path d="M182.016 50.5381C182.016 44.6148 186.179 40.4336 191.899 40.4336C196.841 40.4336 200.382 43.1436 200.926 47.5958H196.802C196.335 45.3891 194.428 43.9179 191.899 43.9179C188.63 43.9179 186.179 46.6279 186.179 50.5381C186.179 54.4483 188.669 57.1583 191.899 57.1583C194.623 57.1583 196.646 55.571 196.957 53.4417H201.121C200.654 57.5455 197.113 60.6427 191.899 60.6427C186.179 60.6427 182.016 56.4228 182.016 50.5381Z" fill="white"/>
<path d="M203.601 35.2812H207.687V43.721C208.893 41.8627 211.423 40.469 214.263 40.469C218.465 40.469 221.617 43.2178 221.617 47.3989V60.3684H217.532V48.4055C217.532 45.7729 215.897 44.0695 213.329 44.0695C210.022 44.0695 207.648 46.6246 207.648 51.5801V60.3684H203.562V35.2812H203.601Z" fill="white"/>
</svg>
   
        
        </div>
        <div className="nav-links">
          <a href="#company">The Company</a>
          <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Our Services</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
               
       <a href="#expertise">Our Expertise</a>
          <a href="#work">Client Work</a>
        </div>
        <button className="btn" variant="contained">Engage Us</button>
      </nav>
    );
  };