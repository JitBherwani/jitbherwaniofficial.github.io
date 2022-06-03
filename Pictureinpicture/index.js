const videoElement = document.getElementById('video');
const button = document.getElementById('btn');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('ERROR OCCURED!!', error)
    }
    
}
button.addEventListener('click',async()=>{
    console.log("hello")
    this.disabled = true;
    await videoElement.requestPictureInPicture();
    this.disabled = false;   
})

selectMediaStream();