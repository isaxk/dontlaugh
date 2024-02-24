let stream;
let audioContext;
let mediaStreamAudioSourceNode;
let analyserNode: any;
let pcmData: any;

export const microphone: any = {
    init: async () => {
        stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        });
        audioContext = new AudioContext();
        mediaStreamAudioSourceNode =
            audioContext.createMediaStreamSource(stream);
        analyserNode = audioContext.createAnalyser();
        mediaStreamAudioSourceNode.connect(analyserNode);
        pcmData = new Float32Array(analyserNode.fftSize);
    },
    getCurrentVolume: async () => {
        analyserNode.getFloatTimeDomainData(pcmData);
        let sumSquares = 0.0;
        for (const amplitude of pcmData) {
            sumSquares += amplitude * amplitude;
        }
        const averageVolume = Math.sqrt(sumSquares / pcmData.length) * 300;
        return Math.round((averageVolume + Number.EPSILON) * 100) / 100;
    },
};
