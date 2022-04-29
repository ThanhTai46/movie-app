import React from "react";
import "./faq.scss";
const FAQ = () => {
  return (
    <section className="py-20 faq page-container">
      <h1 className="md:text-[1.5rem] text-center text-[2.5rem] font-semibold ">
        Câu hỏi thường gặp{" "}
      </h1>{" "}
      <div className="mt-5 md:pl-4">
        <h3 className="text-[1.5em] font-semibold text-[#ffdd57] mb-[0.6666em]">
          1. Xem phim bị chậm, mặc dù đã kích hoạt VIP Mode cho phim đó ?
        </h3>{" "}
        <p className="font-normal">
          Nếu phim chạy nhưng cứ một đoạn lại bị dừng để chờ load tiếp(dù đã thử
          chọn các server khác nhau), cần xác định do thiết bị hay do mạng của
          bạn.{" "}
        </p>{" "}
        <ul className="m-6 list-disc ">
          <li className="mb-4">
            Hãy thử xem phim trên một thiết bị khác(máy tính / điện thoại /
            TV...).Nếu đổi sang thiết bị khác phim lại chạy mượt => do thiết bị
            cũ của bạn.Nếu đó là TV, hãy kiểm tra thiết lập TV và tắt giao thức
            kết nối mạng IPv6.Nếu đó là một thiết bị chạy iOS, thì hãy thử dùng
            một trình duyệt khác(chẳng hạn Chrome) thay vì trình duyệt Safari
            mặc định, nhưng nói chung player trên iOS rất hay có vấn đề với phim
            bitrate cao + âm thanh 5.1.{" "}
          </li>{" "}
          <li>
            Nếu phim chạy chậm trên tất cả các thiết bị mà bạn thử, với tất cả
            các server mà trang web cung cấp(bật chế độ VIP mới có), thì đó là
            do băng thông đường truyền quốc tế mạng của bạn bị bóp(do đường
            truyền quốc tế bị nghẽn vào giờ cao điểm hoặc đứt cáp...).Có 2 cách
            giải quyết : 1. Gọi điện phản ánh với nhà mạng; 2. Sử dụng một
            VPN(mạng riêng ảo) để tăng tốc độ cho mạng của bạn.Chúng tôi đề xuất
            bạn dùng ứng dụng WARP.{" "}
          </li>{" "}
        </ul>{" "}
        <h3 className="text-[1.5em] font-semibold text-[#ffdd57] mb-[0.6666em]">
          2. Gặp vấn đề về âm thanh: phim không có tiếng, mất tiếng nhân vật,
          hoặc âm thanh bị rè ?
        </h3>{" "}
        <ul className="m-6 list-disc ">
          <li className="mb-4">
            Nếu xem trên điện thoại : Lỗi âm thanh là do trình duyệt của
            bạn(thường là Chrome).{" "}
          </li>{" "}
          <li>
            Nếu bạn xem trên PC: Khác với phim / clip trên các web khác(kể cả
            Youtube), phim trên XemPhim sử dụng âm thanh 5.1(6 channel) thay vì
            âm thanh stereo(2 channel).Nếu thiết bị bạn xem chỉ có 2 loa, bạn
            cần thiết lập chương trình quản lý âm thanh trên thiết bị cho đúng:
            chọn đúng chế độ với số loa mình có(stereo), đừng chọn nhiều hơn,
            nếu không thiết bị của bạn sẽ cố gắng xuất âm thanh ra những loa
            không tồn tại => mất tiếng..{" "}
          </li>{" "}
        </ul>{" "}
        <h3 className="text-[1.5em] font-semibold text-[#ffdd57] mb-[0.6666em]">
          3. Làm sao để xem phim trên TV ?
        </h3>{" "}
        <p>
          Để xem phim trên TV, TV bạn phải có trình duyệt web.Hầu hết các loại
          Smart TV những năm gần đây đều có cài sẵn trình duyệt.Nếu TV bạn không
          có sẵn trình duyệt, bạn có thể cài trình duyệt từ cửa hàng ứng
          dụng(Google Play Store / CH Play / App Store) trên TV.Với TV Android,
          bạn nên cài trình duyệt Puffin.Sau khi cài trình duyệt, truy cập trang
          web như bạn vẫn làm trên máy tính / điện thoại và xem phim.{" "}
        </p>{" "}
        <br />
        <p>
          Nếu bạn không thể xem phim bằng trình duyệt trên TV, bạn có thể kết
          nối máy tính với TV(thường qua cổng HDMI) rồi phát từ máy tính lên TV.{" "}
        </p>{" "}
      </div>{" "}
    </section>
  );
};

export default FAQ;
