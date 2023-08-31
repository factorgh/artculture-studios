import { styled } from "styled-components"

const StyledMain = styled.main`
    width: 100%;
    height:100vh;
    top:0;
    bottom:0;
    right:0;
    left:0;
`
const Video = styled.video`
    width:100%;
    height:100%;
    object-fit: cover;
`
const StyledContent = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    color:black;

`
const StyledButton = styled.button`
    width:150px;
    height:50px;
    color:orange;
    font-size:15px;
    border:1px solid black;
    border-radius:15px;
    background-color: rgba(0,0,0,0.5);
`
const StyledOverlay = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
    background-color: rgba(0,0,0,0.5)
`
const StyledBanner = styled.div`
    color:white;
    font-size: 100px;
    font-weight:bold;
    padding: 2px;

`
const StyledDesc = styled.div`
    font-size: 20px;
    color:white;
   padding:5px;
`
function GetStarted() {
  return (
      <StyledMain>
          <StyledOverlay></StyledOverlay>
          <Video autoPlay muted src="artCulture.mp4"></Video>
          <StyledContent>
              <StyledBanner>
                  artCulture
                  <span style={{
                      color: "orange"
                  }}> Studios</span>
              </StyledBanner>
              <StyledDesc>Jay-pro conversation on the perspective of creativity and innovation</StyledDesc>
              <StyledDesc>New Episodes coming to you every Saturday @ 12pm</StyledDesc>
              <StyledButton>Watch Now</StyledButton>
          </StyledContent>
    </StyledMain>
  )
}

export default GetStarted