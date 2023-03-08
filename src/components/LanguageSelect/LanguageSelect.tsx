import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';




function LanguageSelect() {

const { t } = useTranslation<string>();
const handleChange = (e:SelectChangeEvent) =>{
   const language = e.target.value as string
    i18n.changeLanguage(language);
}
  return (
    <FormControl  sx={{ m: 1, minWidth: 120 }} size="small" >
  <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"

    label="Language"
    onChange={handleChange}
  >
    <MenuItem value={'eng'}>English</MenuItem>
    <MenuItem value={'ua'}>Українська</MenuItem>
  </Select>
</FormControl>
  )
}

export default LanguageSelect;
