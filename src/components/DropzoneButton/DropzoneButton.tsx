import { useRef, useState } from 'react';
import { Text, Group, Button, rem, useMantineTheme, SimpleGrid } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import classes from './DropzoneButton.module.css';
import PredictAPI from '../../scripts/api'; 

const Title = ({ titleText }) => (
  <Text component="h2" align="center" style={{ marginTop: '2rem', marginBottom: '1rem' }} size="xl" className={classes.title}>
    📕 Predict
  </Text>
);

const RightComponent = ({ uploadedFile }) => {
  const [waitingToPredicting, setWaitingToPredicting] = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [predictionError, setPredictionError] = useState('');
  const [resultVisible, setResultVisible] = useState(false);
  const [predictionResult, setPredictionResult] = useState('');
  const [confidenceResult, setConfidenceResult] = useState('');
  const [predictClicked, setPredictClicked] = useState(false);

  const handlePredict = async () => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      setPredictClicked(true);
      setWaitingToPredicting(true);
      setResultVisible(false);
      setLoadingPredict(true);

      const response = await PredictAPI.predict(formData);

      showPredictionResult(response);
      setResultVisible(true);
    } catch (error) {
      console.error(error);
      setPredictionError(error.message);
    } finally {
      setLoadingPredict(false);
      setWaitingToPredicting(false);
    }
  };

  const uploadFile = async (formData) => {
    try {
      const response = await PredictAPI.predict(formData);
      return response;
    } catch (error) {
      throw new Error(`Prediction failed: ${error.message}`);
    }
  };

  const showPredictionResult = (response) => {
    setPredictionResult(response.predicted_letter);
    setConfidenceResult(response.confidence);
  };

  return (
    <div className={classes.previewContainer}>
      {uploadedFile && (
        <>
          <img
            id="previewImg"
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded File Preview"
            className={classes.previewImage}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {resultVisible && (
            <div id="result" className="result-container">
              <div className="prediction-result">
                <div>
                  <div className="result-title">Result:</div>
                  <div>{predictionResult}</div>
                  <div className="result-title">Confidence:</div>
                  <div>{confidenceResult}</div>
                </div>
              </div>
            </div>
          )}
          {!waitingToPredicting && !loadingPredict && ( 
            <div style={{ marginTop: '1rem' }}>
            <Button
              className={classes.predictButton}
              size="lg"
              radius="xl"
              fullWidth
              onClick={handlePredict}
            >
              Predict
            </Button>
            </div>
          )}

          {waitingToPredicting && (
            <div id="waitingToPredicting" className="result-container">
              Waiting for prediction...
            </div>
          )}

          {loadingPredict && (
            <div className="result-container loading">
              Loading...
            </div>
          )}

          {predictionError && (
            <div id="predictionError" className="result-container">
              Error: {predictionError}
            </div>
          )}


        </>
      )}
    </div>
  );
};

export default RightComponent;
export function DropzoneButton() {
  const theme = useMantineTheme();
  const openRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [predictClicked, setPredictClicked] = useState(false); // Track if predict button was clicked

  const handleDrop = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      setFileName(file.name);
      setImageUploaded(true);
      setPredictClicked(false); // Reset predict button state when new file is uploaded
      setResultVisible(false); // Hide result when new image is uploaded
    }
  };

  return (
    <div className={classes.container}>
      <Title></Title>

      <SimpleGrid cols={{ base: 1, xs: 2 }} gutter={20}>
        {/* Left Grid */}
        <div className={`${classes.wrapper} ${classes.gridContainer}`}>
          <Dropzone
            openRef={openRef}
            onDrop={handleDrop}
            className={classes.dropzone}
            radius="md"
            accept={['image/png', 'image/jpeg', 'image/jpg']}
            maxSize={30 * 1024 ** 2}
          >
            <div style={{ pointerEvents: uploadedFile ? 'none' : 'auto' }}>
              {uploadedFile ? (
                <div className={classes.previewContainer}>
                  <img
                    id="previewImg"
                    src={URL.createObjectURL(uploadedFile)}
                    alt="Uploaded File Preview"
                    className={classes.previewImage}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <Text ta="center" fw={700} fz="lg" mt="xl">
                    {fileName} 
                  </Text>
                </div>
              ) : (
                <>
                  <Group justify="center">
                    <Dropzone.Accept>
                      <IconDownload
                        style={{ width: rem(50), height: rem(50) }}
                        color={theme.colors.blue[6]}
                        stroke={1.5}
                      />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX
                        style={{ width: rem(50), height: rem(50) }}
                        color={theme.colors.red[6]}
                        stroke={1.5}
                      />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
                    </Dropzone.Idle>
                  </Group>

                  <Text ta="center" fw={700} fz="lg" mt="xl">
                    <Dropzone.Accept>Drop files here</Dropzone.Accept>
                    <Dropzone.Reject>Images less than 30mb</Dropzone.Reject>
                    <Dropzone.Idle>Upload Gambar</Dropzone.Idle>
                  </Text>
                  <Text ta="center" fz="sm" mt="xs" c="dimmed">
                    Drag'n'drop images here to upload. We can accept only <i>.png</i>, <i>.jpeg</i>, and <i>.jpg</i> files that are less than 30mb in size.
                  </Text>
                </>
              )}
            </div>
          </Dropzone>
        </div>

        {/* Right Grid */}
        {imageUploaded && (
          <div className={`${classes.wrapper} ${classes.gridContainer}`}>
            <RightComponent
              uploadedFile={uploadedFile}
              onReset={() => {
                setUploadedFile(null);
                setFileName(null);
                setImageUploaded(false);
                setPredictClicked(false); 
                setResultVisible(false); 
              }}
            />
          </div>
        )}
      </SimpleGrid>
    </div>
  );
}
