import React, { useState, useEffect } from "react";
import styles from "./css/WhereWhen.module.css";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

function WhereWhen(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    props.preStep();
  };

  const handleContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className={styles.background}>
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
      >
        <div className={styles.container}>
          <div className={styles.partTwo}>
            <div className={styles.titleWrapper}>
              <span className={styles.partTwo__Title}>
                Say Where &amp; When?
              </span>
              <button
                className={styles.closeButton}
                onClick={handleClose}
                type="button"
              >
                <a href={`/browse-tasks`}>X</a>
              </button>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressContainer}>
                <div className={styles.progressFiller}></div>
              </div>
            </div>
            {/* what do you need done? */}
            <div className={styles.taskTitle}>
              <span className={styles.questionTitle}>
                Where do you need it?
              </span>
            </div>
            <div className={styles.optionWrapper}>
              <div className={styles.inPersonOp}>
                <div className={styles.optionLabel}>
                  <input
                    className={styles.labelRadio}
                    type="radio"
                    name="type"
                    value="inPerson"
                    onChange={props.handleChange("type")}
                    checked={props.values.type === "inPerson"}
                  />
                  <p className={styles.labelTitle}>In Person</p>
                  <div className={styles.labelDescription}>
                    Select this if you need the Tasker physically there.
                  </div>
                  <div className={styles.icon}>
                    <svg
                      fill="#008fb4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.25a7.29 7.29 0 0 0-7.25 7.3C4.75 12.49 8.4 18 10.57 21a1.77 1.77 0 0 0 2.86 0c2.17-3 5.82-8.53 5.82-11.47A7.29 7.29 0 0 0 12 2.25zm.21 17.89q-.21.28-.42 0c-3.47-4.82-5.54-8.78-5.54-10.59a5.75 5.75 0 1 1 11.5 0c0 1.81-2.07 5.77-5.54 10.59z"></path>
                      <path d="M12 7.13a2.75 2.75 0 1 0 2.75 2.75A2.75 2.75 0 0 0 12 7.13zm0 4a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 11.13z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.onlineOp}>
                <div className={styles.optionLabel}>
                  <input
                    className={styles.labelRadio}
                    type="radio"
                    name="type"
                    value="remote"
                    onChange={props.handleChange("type")}
                    checked={props.values.type === "remote"}
                  />
                  <p className={styles.labelTitle}>Online</p>
                  <div className={styles.labelDescription}>
                    Select this if the Tasker can do it from home
                  </div>
                  <div className={styles.icon}>
                    <svg
                      fill="#008fb4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.25 4c0-.686.564-1.25 1.25-1.25h7c.686 0 1.25.564 1.25 1.25v16c0 .686-.564 1.25-1.25 1.25h-7c-.686 0-1.25-.564-1.25-1.25zM8.5 1.25A2.756 2.756 0 0 0 5.75 4v16a2.756 2.756 0 0 0 2.75 2.75h7A2.756 2.756 0 0 0 18.25 20V4a2.756 2.756 0 0 0-2.75-2.75zm4.6 16.15a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.suburbSelect}>
              <input
                className={styles.suburbInput}
                type="text"
                placeholder="Enter a suburb"
                onChange={props.handleChange("location")}
                value={props.values.location}
              />
            </div>
            <div className={styles.taskTitleTwo}>
              <span className={styles.questionTitle}>
                When do you need it done?
              </span>
            </div>
            <div className={styles.selectDateWrapper}>
              <TextField
                id="date"
                type="date"
                value={props.values.date}
                onChange={props.handleChange("date")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.partOneButton}>
                <button
                  className={styles.backButton}
                  type="button"
                  onClick={handlePrevious}
                >
                  Back
                </button>
              </div>
              <div className={styles.partOneButton}>
                <button
                  className={styles.nextButton}
                  type="button"
                  onClick={handleContinue}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default WhereWhen;
