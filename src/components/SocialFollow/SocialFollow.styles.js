import Link from '@mui/material/Button';

const MyStyledLink = (props) => (
  <Link
    sx={{
      mx: 1, // ✔️ this shortcut is specific to the `sx` prop,
    }}
  >
    {props.children}
  </Link>
);