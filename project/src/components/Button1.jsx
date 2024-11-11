import {
    GooglePlayButton,
    AppGalleryButton,
    AppStoreButton,
    ButtonsContainer,
  } from "react-mobile-app-button";
  
  const Button1 = () => {
    const APKUrl = "/AppStore";
  
    return (
      <ButtonsContainer>

        <AppStoreButton 
         url={APKUrl}
         theme={"dark"}
         className={"custom-style"}
         sx={{width:'100px'}}

         />

        <GooglePlayButton
          url={APKUrl}
          theme={"dark"}
          className={"custom-style"}
        />


      </ButtonsContainer>
    );
  };

  export default Button1;