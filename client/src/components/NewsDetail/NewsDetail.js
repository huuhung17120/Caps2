import { Container, Box, Typography, TextareaAutosize, TextField, Button } from '@material-ui/core';
import React from 'react';
import Subnar from '../SubNar/Subnar';
import useStyles from './styles';

export default function NewsDetail() {
  const classes = useStyles();
  return (
    <Container>
      <Subnar/>
      <Container className={classes.mainContent}>
        <Container className={classes.leftContent}>
          <Box
            className={classes.img}
            component="img"
            sx={{
              height: 600,
              width: 900,
              maxHeight: { xs: 600, md: 400 },
              maxWidth: { xs: 900, md: 650 },
            }}
            alt=""
            src="https://br.atsit.in/vi/wp-content/uploads/2022/02/jujutsu-kaisen-season-2-chinh-thuc-duoc-xac-nhan-voi-cua-so-phat-hanh.jpg"
          />
          <Typography className={classes.newsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          <Typography className={classes.newsContent}>Đội bóng thủ đô khẳng định không gia hạn hợp đồng với Nguyễn Quang Hải sau khi không đạt được thỏa thuận.
            Trên trang chủ đội bóng, CLB Hà Nội xác nhận chia tay Quang Hải. Ban lãnh đạo đội bóng thủ đô luôn muốn giữ chân tiền vệ này. Tuy nhiên, họ cũng hiểu và tôn trọng nguyện vọng muốn được thi đấu ở nước ngoài của Quang Hải.
          </Typography>
        </Container>
        <Container className={classes.rightContent}>
          <TextField
            className={classes.comment}
            placeholder="Bình Luận..."
            multiline
            rows={5}
            variant="outlined"
            maxRows={5}
          />
          <Container className={classes.belowInput}>
            <Typography className={classes.note}>*Ý kiến của bạn sẽ được xét duyệt trước khi đăng. / Your comments will be moderated before posting.</Typography>
            <Button variant="contained" size='small' className={classes.btnComment}>Gửi bình luận</Button>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
