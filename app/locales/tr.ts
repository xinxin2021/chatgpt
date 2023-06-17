import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const tr: LocaleType = {
  WIP: "Çalışma devam ediyor...",
  Error: {
    Unauthorized:
      "Yetkisiz erişim, lütfen erişim kodunu ayarlar sayfasından giriniz.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mesaj`,
  },
  Chat: {
    SubTitle: (count: number) => `ChatGPT tarafından ${count} mesaj`,
    Actions: {
      ChatList: "Sohbet Listesine Git",
      CompressedHistory: "Sıkıştırılmış Geçmiş Bellek Komutu",
      Export: "Tüm Mesajları Markdown Olarak Dışa Aktar",
      Copy: "Kopyala",
      Stop: "Durdur",
      Retry: "Tekrar Dene",
      Delete: "Delete",
    },
    Rename: "Sohbeti Yeniden Adlandır",
    Typing: "Yazıyor…",
    Input: (submitKey: string) => {
      var inputHints = `Göndermek için ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", kaydırmak için Shift + Enter";
      }
      return inputHints + ", komutları aramak için / (eğik çizgi)";
    },
    Send: "Gönder",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "Tüm Mesajlar",
    Copy: "Tümünü Kopyala",
    Download: "İndir",
    MessageFromYou: "Sizin Mesajınız",
    MessageFromChatGPT: "ChatGPT'nin Mesajı",
  },
  Memory: {
    Title: "Bellek Komutları",
    EmptyContent: "Henüz değil.",
    Send: "Belleği Gönder",
    Copy: "Belleği Kopyala",
    Reset: "Oturumu Sıfırla",
    ResetConfirm:
      "Sıfırlama, geçerli görüşme geçmişini ve geçmiş belleği siler. Sıfırlamak istediğinizden emin misiniz?",
  },
  Home: {
    NewChat: "Yeni Sohbet",
    DeleteChat: "Seçili sohbeti silmeyi onaylıyor musunuz?",
    DeleteToast: "Sohbet Silindi",
    Revert: "Geri Al",
  },
  Settings: {
    Title: "Ayarlar",
    SubTitle: "Tüm Ayarlar",
    Actions: {
      ClearAll: "Tüm Verileri Temizle",
      ResetAll: "Tüm Ayarları Sıfırla",
      Close: "Kapat",
      ConfirmResetAll: "Tüm ayarları sıfırlamak istediğinizden emin misiniz?",
      ConfirmClearAll: "Tüm sohbeti sıfırlamak istediğinizden emin misiniz?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tüm Diller",
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
    Avatar: "Avatar",
    FontSize: {
      Title: "Yazı Boyutu",
      SubTitle: "Sohbet içeriğinin yazı boyutunu ayarlayın",
    },
    Update: {
      Version: (x: string) => `Sürüm: ${x}`,
      IsLatest: "En son sürüm",
      CheckUpdate: "Güncellemeyi Kontrol Et",
      IsChecking: "Güncelleme kontrol ediliyor...",
      FoundUpdate: (x: string) => `Yeni sürüm bulundu: ${x}`,
      GoToUpdate: "Güncelle",
    },
    SendKey: "Gönder Tuşu",
    Theme: "Tema",
    TightBorder: "Tam Ekran",
    SendPreviewBubble: {
      Title: "Mesaj Önizleme Balonu",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Otomatik tamamlamayı devre dışı bırak",
        SubTitle: "Otomatik tamamlamayı kullanmak için / (eğik çizgi) girin",
      },
      List: "Komut Listesi",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} yerleşik, ${custom} kullanıcı tanımlı`,
      Edit: "Düzenle",
      Modal: {
        Title: "Prompt List",
        Add: "Add One",
        Search: "Search Prompts",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Ekli Mesaj Sayısı",
      SubTitle: "İstek başına ekli gönderilen mesaj sayısı",
    },
    CompressThreshold: {
      Title: "Geçmiş Sıkıştırma Eşiği",
      SubTitle:
        "Sıkıştırılmamış mesajların uzunluğu bu değeri aşarsa sıkıştırılır",
    },
    Token: {
      Title: "API Anahtarı",
      SubTitle: "Erişim kodu sınırını yoksaymak için anahtarınızı kullanın",
      Placeholder: "OpenAI API Anahtarı",
    },
    Usage: {
      Title: "Hesap Bakiyesi",
      SubTitle(used: any, total: any) {
        return `Bu ay kullanılan $${used}, abonelik $${total}`;
      },
      IsChecking: "Kontrol ediliyor...",
      Check: "Tekrar Kontrol Et",
      NoAccess: "Bakiyeyi kontrol etmek için API anahtarını girin",
    },
    AccessCode: {
      Title: "Erişim Kodu",
      SubTitle: "Erişim kontrolü etkinleştirme",
      Placeholder: "Erişim Kodu Gerekiyor",
    },
    Model: "Model",
    Temperature: {
      Title: "Gerçeklik",
      SubTitle:
        "Daha büyük bir değer girildiğinde gerçeklik oranı düşer ve daha rastgele çıktılar üretir",
    },
    MaxTokens: {
      Title: "Maksimum Belirteç",
      SubTitle:
        "Girdi belirteçlerinin ve oluşturulan belirteçlerin maksimum uzunluğu",
    },
    PresencePenlty: {
      Title: "Varlık Cezası",
      SubTitle:
        "Daha büyük bir değer, yeni konular hakkında konuşma olasılığını artırır",
    },
  },
  Store: {
    DefaultTopic: "Yeni Konuşma",
    BotHello: "ChatGPT Xinxin tarafından yapılan bir web sitesi<br>Her iki site de aynı depoyu kullanıyor, bu yüzden mesajları ayrı ayrı göstermek mümkün değil. Lütfen anlayış gösterin.<br>Eğer yedek site üzerindeyseniz:<br>Bu site sadece kişisel kullanım içindir. Lütfen [ücretsiz deneme sitesine](https://free.gpt.xinxin2021.tk) gidin.<br>Eğer ücretsiz deneme sitesindeyseniz:<br>Bu hizmet [Hk-Gosuto](https://github.com/Hk-Gosuto) tarafından değiştirilmiş ve [Yidadaa](https://github.com/Yidadaa) tarafından oluşturulmuş olan [ChatGPT-Next-Web](https://github.com/Hk-Gosuto/ChatGPT-Next-Web) üzerine dayanmaktadır ve orijinal sürümden daha fazla çevrimiçi özelliğe sahiptir.<br>Birkaç anahtarlı ustalık dersini satın almaya gücüm yetmediğinden, [pengzhile](https://github.com/pengzhile)'nin Paylaşım Jetonu ve Havuz Jetonu kullanarak bu hizmeti sağlıyorum. Teorik olarak, en fazla 6 kişi aynı anda kullanabilir.<br>OpenAI hesapları ve şifreleri aktarıldı:<br>j.ale.ig.h.jphh.d.p97.10.9@gmail.com / qw2RuYz$tg1<br>s.ne.edi.dh.e99.3.20.9@gmail.com / srd5YFrw2*ch0<br>co.b.b.fawo.yj0.04.469@gmail.com / @uyHSzEEXZaz<br>stil.tn.er.jygo36.4.1@gmail.com / d%AMmeZpvNt<br>cob.bfa.woy.j.0.0.4.469@gmail.com / RQc!areDgNU<br>j.a.l.eig.h.jphh.dp97.1.0.9@gmail.com / 9H^Ez1b0wCB<br>OpenAI API Anahtarları aktarıldı:<br>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 / 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 / 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 / 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 / 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 / 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",
    Error: "Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyiniz.",
    Prompt: {
      History: (content: string) =>
        "Bu, yapay zeka ile kullanıcı arasındaki sohbet geçmişinin bir özetidir: " +
        content,
      Topic:
        "Lütfen herhangi bir giriş, noktalama işareti, tırnak işareti, nokta, sembol veya ek metin olmadan konuşmamızı özetleyen dört ila beş kelimelik bir başlık oluşturun. Çevreleyen tırnak işaretlerini kaldırın.",
      Summarize:
        "Gelecekteki bağlam için bir bilgi istemi olarak kullanmak üzere tartışmamızı en fazla 200 kelimeyle özetleyin.",
    },
  },
  Copy: {
    Success: "Panoya kopyalandı",
    Failed: "Kopyalama başarısız oldu, lütfen panoya erişim izni verin",
  },
  Context: {
    Toast: (x: any) => `${x} bağlamsal bellek komutu`,
    Edit: "Bağlamsal ve Bellek Komutları",
    Add: "Yeni Ekle",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: "Search Templates",
      Create: "Create",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
    },
  },
  NewChat: {
    Return: "Return",
    Skip: "Skip",
    Title: "Pick a Mask",
    SubTitle: "Chat with the Soul behind the Mask",
    More: "Find More",
    NotShow: "Not Show Again",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "Confirm",
    Cancel: "Cancel",
    Close: "Close",
    Create: "Create",
    Edit: "Edit",
  },
};

export default tr;
