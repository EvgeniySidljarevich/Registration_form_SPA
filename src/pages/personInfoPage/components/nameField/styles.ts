import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
        form: {
            "& .MuiInputBase-input, .MuiOutlinedInput-input": {
                padding: "10px",
            },
            marginBottom: "0",
        },
    }),
);