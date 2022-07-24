import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { Helmet } from "react-helmet-async";
import { CustomButton } from "../components/Buttons";
import {
  CustomInputLabel,
  CustomOutlinedInput,
} from "../components/TextFields";
import {
  SpammerProvider,
  useSpammerDispatch,
  useSpammerState,
  spamSmsGenflix,
} from "../context/spammer";
import styles from "../styles/Home.module.css";
import { AlertDialog, useAlertDialog } from "../components/AlertDialog";
import { LoadingDialog } from "../components/LoadingDialog";
import { SnackbarError, useSnackbar } from "../components/Snackbar";

function Component() {
  const { data, err, loading } = useSpammerState();
  const dispatch = useSpammerDispatch();

  const { messageSnackbar, setMessageSnackbar } = useSnackbar();
  const { openError, setOpenError } = useAlertDialog();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mobile = e.target.mobile.value;
    if (mobile === "") {
      setMessageSnackbar("required mobile number");
      return;
    }
    if (mobile.length < 10) {
      setMessageSnackbar("mobile number minimum length 10 character");
      return;
    }
    dispatch(spamSmsGenflix(mobile));
  };

  return (
    <div className={styles.container}>
      <LoadingDialog open={loading} />
      <AlertDialog
        severity={data !== null ? "success" : "error"}
        message={err !== null ? 'Failed send' : (data !== null ? 'Success send' : null)}
        setOpenError={setOpenError}
        openError={openError}
        duration="short"
      />
      <SnackbarError
        messageSnackbar={messageSnackbar}
        setMessageSnackbar={setMessageSnackbar}
      />

      <Container maxWidth="sm" className={styles["main-container"]}>
        <div className={styles["sub-container"]}>
          <div className={styles["form-container"]}>
            <div className={styles["title-header"]}>
              <h1 className={styles.title}>Spam Sms</h1>
            </div>
            <form style={{ marginTop: "15px" }} onSubmit={handleSubmit}>
              <div className={styles["form-control"]}>
                <FormControl
                  variant="outlined"
                  fullWidth={true}
                  className={styles["form-control"]}
                >
                  <CustomInputLabel color="#95a5a6" colorFocused="#3498db">
                    Mobile number
                  </CustomInputLabel>
                  <CustomOutlinedInput
                    color="#2d3436"
                    colorNotched="#95a5a6"
                    colorHoverNotched="#3498db"
                    label="Mobile number"
                    placeholder="08xxx"
                    name="mobile"
                    type="number"
                    maxLength={15}
                  />
                </FormControl>
              </div>
              <CustomButton
                className={styles["btn-submit"]}
                customColor="white"
                backgroundColor="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
                backgroundHoverColor="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
                type="submit"
                width="100%"
                margin="0px 0 10px 0"
                children="Spam"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Framebyte - Home</title>
      </Helmet>
      <SpammerProvider children={<Component />} />
    </>
  );
}
