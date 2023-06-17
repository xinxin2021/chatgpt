import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const vi: LocaleType = {
  WIP: "Coming Soon...",
  Error: {
    Unauthorized:
      "Truy cập chưa xác thực, vui lòng nhập mã truy cập trong trang cài đặt.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} tin nhắn`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} tin nhắn với ChatGPT`,
    Actions: {
      ChatList: "Xem danh sách chat",
      CompressedHistory: "Nén tin nhắn trong quá khứ",
      Export: "Xuất tất cả tin nhắn dưới dạng Markdown",
      Copy: "Sao chép",
      Stop: "Dừng",
      Retry: "Thử lại",
      Delete: "Xóa",
    },
    Rename: "Đổi tên",
    Typing: "Đang nhập…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} để gửi`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter để xuống dòng";
      }
      return inputHints + ", / để tìm kiếm mẫu gợi ý";
    },
    Send: "Gửi",
    Config: {
      Reset: "Khôi phục cài đặt gốc",
      SaveAs: "Lưu dưới dạng Mẫu",
    },
  },
  Export: {
    Title: "Tất cả tin nhắn",
    Copy: "Sao chép tất cả",
    Download: "Tải xuống",
    MessageFromYou: "Tin nhắn của bạn",
    MessageFromChatGPT: "Tin nhắn từ ChatGPT",
  },
  Memory: {
    Title: "Lịch sử tin nhắn",
    EmptyContent: "Chưa có tin nhắn",
    Send: "Gửi tin nhắn trong quá khứ",
    Copy: "Sao chép tin nhắn trong quá khứ",
    Reset: "Đặt lại phiên",
    ResetConfirm:
      "Đặt lại sẽ xóa toàn bộ lịch sử trò chuyện hiện tại và bộ nhớ. Bạn có chắc chắn muốn đặt lại không?",
  },
  Home: {
    NewChat: "Cuộc trò chuyện mới",
    DeleteChat: "Xác nhận xóa các cuộc trò chuyện đã chọn?",
    DeleteToast: "Đã xóa cuộc trò chuyện",
    Revert: "Khôi phục",
  },
  Settings: {
    Title: "Cài đặt",
    SubTitle: "Tất cả cài đặt",
    Actions: {
      ClearAll: "Xóa toàn bộ dữ liệu",
      ResetAll: "Khôi phục cài đặt gốc",
      Close: "Đóng",
      ConfirmResetAll: "Bạn chắc chắn muốn thiết lập lại tất cả cài đặt?",
      ConfirmClearAll: "Bạn chắc chắn muốn thiết lập lại tất cả dữ liệu?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tất cả ngôn ngữ",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        vi: "Vietnamese",
        ru: "Русский",
        cs: "Čeština",
      },
    },
    Avatar: "Ảnh đại diện",
    FontSize: {
      Title: "Font chữ",
      SubTitle: "Thay đổi font chữ của nội dung trò chuyện",
    },
    Update: {
      Version: (x: string) => `Phiên bản: ${x}`,
      IsLatest: "Phiên bản mới nhất",
      CheckUpdate: "Kiểm tra bản cập nhật",
      IsChecking: "Kiểm tra bản cập nhật...",
      FoundUpdate: (x: string) => `Phát hiện phiên bản mới: ${x}`,
      GoToUpdate: "Cập nhật",
    },
    SendKey: "Phím gửi",
    Theme: "Theme",
    TightBorder: "Chế độ không viền",
    SendPreviewBubble: {
      Title: "Gửi bong bóng xem trước",
      SubTitle: "Xem trước nội dung markdown bằng bong bóng",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Chớp màn hình khi bắt đầu cuộc trò chuyện mới",
    },
    Prompt: {
      Disable: {
        Title: "Vô hiệu hóa chức năng tự động hoàn thành",
        SubTitle: "Nhập / để kích hoạt chức năng tự động hoàn thành",
      },
      List: "Danh sách mẫu gợi ý",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} có sẵn, ${custom} do người dùng xác định`,
      Edit: "Chỉnh sửa",
      Modal: {
        Title: "Danh sách mẫu gợi ý",
        Add: "Thêm",
        Search: "Tìm kiếm mẫu",
      },
      EditModal: {
        Title: "Chỉnh sửa mẫu",
      },
    },
    HistoryCount: {
      Title: "Số lượng tin nhắn đính kèm",
      SubTitle: "Số lượng tin nhắn trong quá khứ được gửi kèm theo mỗi yêu cầu",
    },
    CompressThreshold: {
      Title: "Ngưỡng nén lịch sử tin nhắn",
      SubTitle: "Thực hiện nén nếu số lượng tin nhắn chưa nén vượt quá ngưỡng",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Sử dụng khóa của bạn để bỏ qua giới hạn mã truy cập",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Hạn mức tài khoản",
      SubTitle(used: any, total: any) {
        return `Đã sử dụng $${used} trong tháng này, hạn mức $${total}`;
      },
      IsChecking: "Đang kiểm tra...",
      Check: "Kiểm tra",
      NoAccess: "Nhập API Key để kiểm tra hạn mức",
    },
    AccessCode: {
      Title: "Mã truy cập",
      SubTitle: "Đã bật kiểm soát truy cập",
      Placeholder: "Nhập mã truy cập",
    },
    Model: "Mô hình",
    Temperature: {
      Title: "Tính ngẫu nhiên (temperature)",
      SubTitle: "Giá trị càng lớn, câu trả lời càng ngẫu nhiên",
    },
    MaxTokens: {
      Title: "Giới hạn số lượng token (max_tokens)",
      SubTitle: "Số lượng token tối đa được sử dụng trong mỗi lần tương tác",
    },
    PresencePenlty: {
      Title: "Chủ đề mới (presence_penalty)",
      SubTitle: "Giá trị càng lớn tăng khả năng mở rộng sang các chủ đề mới",
    },
  },
  Store: {
    DefaultTopic: "Cuộc trò chuyện mới",
    BotHello: "ChatGPT trang web bởi Xinxin<br>Cả hai trang web đều sử dụng cùng một kho lưu trữ, nên không thể hiển thị thông báo riêng biệt, xin lỗi vì sự bất tiện.<br>Nếu bạn đang sử dụng trang web dự phòng:<br>Trang web này chỉ dành cho sử dụng cá nhân, vui lòng truy cập vào [Trang web trải nghiệm miễn phí](https://free.gpt.xinxin2021.tk).<br>Nếu bạn đang sử dụng trang web trải nghiệm miễn phí:<br>Dịch vụ này dựa trên [ChatGPT-Next-Web](https://github.com/Hk-Gosuto/ChatGPT-Next-Web) được sửa đổi bởi [Hk-Gosuto](https://github.com/Hk-Gosuto) và phát triển bởi [Yidadaa](https://github.com/Yidadaa), có tính năng kết nối mạng hơn phiên bản gốc.<br>Tôi không muốn mua khóa học nhiều tài khoản của các chuyên gia lớn, vì vậy tôi sử dụng Share Token và Pool Token của [pengzhile](https://github.com/pengzhile), lý thuyết có thể cung cấp cho tối đa 6 người sử dụng cùng lúc.<br>Tài khoản và mật khẩu OpenAI được sao chép:<br>j.ale.ig.h.jphh.d.p97.10.9@gmail.com / qw2RuYz$tg1<br>s.ne.edi.dh.e99.3.20.9@gmail.com / srd5YFrw2*ch0<br>co.b.b.fawo.yj0.04.469@gmail.com / @uyHSzEEXZaz<br>stil.tn.er.jygo36.4.1@gmail.com / d%AMmeZpvNt<br>cob.bfa.woy.j.0.0.4.469@gmail.com / RQc!areDgNU<br>j.a.l.eig.h.jphh.dp97.1.0.9@gmail.com / 9H^Ez1b0wCB<br>Khóa API OpenAI được sao chép:<br>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 / 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 / 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 / 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 / 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 / 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",
    Error: "Có lỗi xảy ra, vui lòng thử lại sau.",
    Prompt: {
      History: (content: string) =>
        "Tóm tắt ngắn gọn cuộc trò chuyện giữa người dùng và AI: " + content,
      Topic:
        "Sử dụng 4 đến 5 từ tóm tắt cuộc trò chuyện này mà không có phần mở đầu, dấu chấm câu, dấu ngoặc kép, dấu chấm, ký hiệu hoặc văn bản bổ sung nào. Loại bỏ các dấu ngoặc kép kèm theo.",
      Summarize:
        "Tóm tắt cuộc trò chuyện này một cách ngắn gọn trong 200 từ hoặc ít hơn để sử dụng làm gợi ý cho ngữ cảnh tiếp theo.",
    },
  },
  Copy: {
    Success: "Sao chép vào bộ nhớ tạm",
    Failed:
      "Sao chép không thành công, vui lòng cấp quyền truy cập vào bộ nhớ tạm",
  },
  Context: {
    Toast: (x: any) => `Sử dụng ${x} tin nhắn chứa ngữ cảnh`,
    Edit: "Thiết lập ngữ cảnh và bộ nhớ",
    Add: "Thêm tin nhắn",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mẫu",
    Page: {
      Title: "Mẫu trò chuyện",
      SubTitle: (count: number) => `${count} mẫu`,
      Search: "Tìm kiếm mẫu",
      Create: "Tạo",
    },
    Item: {
      Info: (count: number) => `${count} tin nhắn`,
      Chat: "Chat",
      View: "Xem trước",
      Edit: "Chỉnh sửa",
      Delete: "Xóa",
      DeleteConfirm: "Xác nhận xóa?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Chỉnh sửa mẫu ${readonly ? "(chỉ xem)" : ""}`,
      Download: "Tải xuống",
      Clone: "Tạo bản sao",
    },
    Config: {
      Avatar: "Ảnh đại diện bot",
      Name: "Tên bot",
    },
  },
  NewChat: {
    Return: "Quay lại",
    Skip: "Bỏ qua",
    Title: "Chọn 1 biểu tượng",
    SubTitle: "Bắt đầu trò chuyện ẩn sau lớp mặt nạ",
    More: "Tìm thêm",
    NotShow: "Không hiển thị lại",
    ConfirmNoShow: "Xác nhận tắt? Bạn có thể bật lại trong phần cài đặt.",
  },

  UI: {
    Confirm: "Xác nhận",
    Cancel: "Hủy",
    Close: "Đóng",
    Create: "Tạo",
    Edit: "Chỉnh sửa",
  },
};

export default vi;
