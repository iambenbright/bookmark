import Box from '@material-ui/core/Box';

interface ContainerProps {
  children?: React.ReactNode;
  style?: object;
  className?: string;
}

export default function Container(props: ContainerProps) {
  const { children, style, className, ...restProps } = props;

  return (
    <Box
      px={{ xs: 2, md: 6, lg: 10 }}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </Box>
  );
}
