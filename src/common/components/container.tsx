import Box from '@material-ui/core/Box';

interface ContainerProps {
  children?: React.ReactNode;
  style?: object;
}

export default function Container(props: ContainerProps) {
  const { children, style, ...restProps } = props;

  return (
    <Box px={{ xs: 2, md: 6, lg: 10 }} style={style} {...restProps}>
      {children}
    </Box>
  );
}
