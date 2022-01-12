import { Button, Card, CardContent, FormControl, FormControlLabel, Grid, Input, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
//import PhotoCamera from "@mui/icons-material/PhotoCamera";
//import DatePicker from "@mui/lab/DatePicker";
import * as React from 'react';

// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';



const PersonalForm = () => {


    return (
        <>
            <Grid container style={{ textAlign: "center" }}>
                <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{
                        color: "#1976d2",
                        textAlign: "center",
                        padding: "10px",
                        textShadow: "1px 1px #FF0000",
                    }}
                >
                    Your Personal Details
                </Typography>
                <Grid
                    item
                    md={12}
                    xs={12}
                    mx={2}
                    px={2}
                    pb={2}
                    sx={{ backgroundColor: "#F9F9F9", borderRadius: "10px", padding: "10px" }}
                >
                    <Grid container spacing={1.8} display={"flex"}>
                        <Grid item md={4} xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                required
                                variant="outlined"
                                size="small"
                                style={{ backgroundColor: "#FFF" }}
                            >
                            </TextField>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                fullWidth
                                label="Father Name"
                                name="fname"
                                required
                                variant="outlined"
                                size="small"
                                style={{ backgroundColor: "#FFF" }}
                            >
                            </TextField>
                        </Grid>
                        {/* <Grid item md={4} xs={12}>
                <DatePicker
                  label="জন্ম তারিখ*"
                  name="birthDate"
                  value={value}
                  required
                 
                />
            </Grid> */}
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider> */}

                        <Grid item md={4} xs={12}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="gender"
                                    required
                                    value={"M"}
                                >
                                    <FormControlLabel
                                        value="M"
                                        control={<Radio />}
                                        label="পুরুষ"
                                    />
                                    <FormControlLabel
                                        value="F"
                                        control={<Radio />}
                                        label="মহিলা"
                                    />
                                    <FormControlLabel
                                        value="B"
                                        control={<Radio />}
                                        label="উভয়"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item md={4} xs={12}>

                            <TextField
                                fullWidth
                                label="Occupation"
                                name="occupation"

                                required
                                select
                                SelectProps={{ native: true }}
                                variant="outlined"
                                size="small"
                                style={{ backgroundColor: "#FFF" }}
                            >
                                <option value="নির্বাচন করুন">- Select -</option>

                            </TextField>

                        </Grid>
                        <Grid item md={4} xs={12}>

                            <TextField
                                fullWidth
                                label="Religion"
                                name="Religion"

                                required
                                select
                                SelectProps={{ native: true }}
                                variant="outlined"
                                size="small"
                                style={{ backgroundColor: "#FFF" }}
                            >
                                <option value="নির্বাচন করুন">- Select -</option>

                            </TextField>

                        </Grid>
                        <Grid item md={4} xs={12}>

                            <TextField
                                fullWidth
                                label="Your Age"
                                name="Age"
                                required
                                variant="outlined"
                                size="small"
                                style={{ backgroundColor: "#FFF" }}
                            >

                            </TextField>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                    mx={2}
                    mt={1}
                    mb={2}
                    px={2}
                    pb={2}
                    sx={{ backgroundColor: "#F9F9F9", borderRadius: "10px" }}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                        style={{
                            color: "#1976d2",
                            textAlign: "center",
                            padding: "10px",
                            textShadow: "1px 1px #FF0000",
                        }}
                    >
                        Attached Your Picture
                    </Typography>
                    <Grid container>
                        <Grid item md={6} xs={12} p={1}>
                            <Card
                                sx={{
                                    display: "flex",
                                    height: "200px",
                                    width: "100%",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{ display: "flex", flexDirection: "column" }}

                                >
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography component="div" variant="h6">
                                            Your Picture
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <label htmlFor="contained-button-file1">
                                                    <Input
                                                        accept="image/*"
                                                        id="contained-button-file1"
                                                        multiple
                                                        type="file"
                                                    />
                                                    <Button
                                                        variant="contained"
                                                        component="span"
                                                    //  startIcon={<PhotoCamera />}
                                                    >
                                                        Attacted
                                                    </Button>
                                                </label>
                                            </Stack>
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12} p={1}>
                            <Card
                                sx={{
                                    display: "flex",
                                    height: "200px",
                                    width: "100%",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{ display: "flex", flexDirection: "column" }}

                                >
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography component="div" variant="h6">
                                            Your NID
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <label htmlFor="contained-button-file1">
                                                    <Input
                                                        accept="image/*"
                                                        id="contained-button-file1"
                                                        multiple
                                                        type="file"
                                                    />
                                                    <Button
                                                        variant="contained"
                                                        component="span"
                                                    //  startIcon={<PhotoCamera />}
                                                    >
                                                        Attacted
                                                    </Button>
                                                </label>
                                            </Stack>
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default PersonalForm
