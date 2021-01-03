import Box from '@material-ui/core/Box';

export default function Container(props: any) {
  return <Box px={{ xs: 2, md: 6, lg: 10 }}>{props.children}</Box>;
}
