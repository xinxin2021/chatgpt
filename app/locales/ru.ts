import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const ru: LocaleType = {
  WIP: "Скоро...",
  Error: {
    Unauthorized:
      "Несанкционированный доступ. Пожалуйста, введите код доступа на странице настроек.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} сообщений`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} сообщений с ChatGPT`,
    Actions: {
      ChatList: "Перейти к списку чатов",
      CompressedHistory: "Сжатая история памяти",
      Export: "Экспортировать все сообщения в формате Markdown",
      Copy: "Копировать",
      Stop: "Остановить",
      Retry: "Повторить",
      Delete: "Удалить",
    },
    Rename: "Переименовать чат",
    Typing: "Печатает…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} для отправки сообщения`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для переноса строки";
      }
      return inputHints + ", / для поиска подсказок";
    },
    Send: "Отправить",
    Config: {
      Reset: "Сбросить настройки",
      SaveAs: "Сохранить как маску",
    },
  },
  Export: {
    Title: "Все сообщения",
    Copy: "Копировать все",
    Download: "Скачать",
    MessageFromYou: "Сообщение от вас",
    MessageFromChatGPT: "Сообщение от ChatGPT",
  },
  Memory: {
    Title: "Память",
    EmptyContent: "Пусто.",
    Send: "Отправить память",
    Copy: "Копировать память",
    Reset: "Сбросить сессию",
    ResetConfirm:
      "При сбросе текущая история переписки и историческая память будут удалены. Вы уверены, что хотите сбросить?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Вы действительно хотите удалить выбранный разговор?",
    DeleteToast: "Чат удален",
    Revert: "Отмена",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Все настройки",
    Actions: {
      ClearAll: "Очистить все данные",
      ResetAll: "Сбросить все настройки",
      Close: "Закрыть",
      ConfirmResetAll: "Вы уверены, что хотите сбросить все настройки?",
      ConfirmClearAll: "Вы уверены, что хотите очистить все данные?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Все языки",
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
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер шрифта",
      SubTitle: "Настроить размер шрифта контента чата",
    },
    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последняя версия",
      CheckUpdate: "Проверить обновление",
      IsChecking: "Проверка обновления...",
      FoundUpdate: (x: string) => `Найдена новая версия: ${x}`,
      GoToUpdate: "Обновить",
    },
    SendKey: "Клавиша отправки",
    Theme: "Тема",
    TightBorder: "Узкая граница",
    SendPreviewBubble: {
      Title: "Отправить предпросмотр",
      SubTitle: "Предварительный просмотр markdown в пузыре",
    },
    Mask: {
      Title: "Экран заставки маски",
      SubTitle: "Показывать экран заставки маски перед началом нового чата",
    },
    Prompt: {
      Disable: {
        Title: "Отключить автозаполнение",
        SubTitle: "Ввод / для запуска автозаполнения",
      },
      List: "Список подсказок",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} встроенных, ${custom} пользовательских`,
      Edit: "Редактировать",
      Modal: {
        Title: "Список подсказок",
        Add: "Добавить",
        Search: "Поиск подсказок",
      },
      EditModal: {
        Title: "Редактировать подсказку",
      },
    },
    HistoryCount: {
      Title: "Количество прикрепляемых сообщений",
      SubTitle:
        "Количество отправляемых сообщений, прикрепляемых к каждому запросу",
    },
    CompressThreshold: {
      Title: "Порог сжатия истории",
      SubTitle:
        "Будет сжимать, если длина несжатых сообщений превышает указанное значение",
    },
    Token: {
      Title: "API ключ",
      SubTitle: "Используйте свой ключ, чтобы игнорировать лимит доступа",
      Placeholder: "API ключ OpenAI",
    },
    Usage: {
      Title: "Баланс аккаунта",
      SubTitle(used: any, total: any) {
        return `Использовано в этом месяце $${used}, подписка $${total}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверить",
      NoAccess: "Введите API ключ, чтобы проверить баланс",
    },
    AccessCode: {
      Title: "Код доступа",
      SubTitle: "Контроль доступа включен",
      Placeholder: "Требуется код доступа",
    },
    Model: "Модель",
    Temperature: {
      Title: "Температура",
      SubTitle: "Чем выше значение, тем более случайный вывод",
    },
    MaxTokens: {
      Title: "Максимальное количество токенов",
      SubTitle: "Максимальная длина вводных и генерируемых токенов",
    },
    PresencePenlty: {
      Title: "Штраф за повторения",
      SubTitle:
        "Чем выше значение, тем больше вероятность общения на новые темы",
    },
  },
  Store: {
    DefaultTopic: "Новый разговор",
    BotHello: "ChatGPT веб-сайт от Xinxin<br>Оба сайта используют один и тот же репозиторий, поэтому невозможно отображать сообщения отдельно. Пожалуйста, поймите.<br>Если вы находитесь на резервном сайте:<br>Этот сайт предназначен только для личного использования. Пожалуйста, перейдите на [сайт бесплатного пробного использования](https://free.gpt.xinxin2021.tk).<br>Если вы находитесь на сайте бесплатного пробного использования:<br>Этот сервис основан на [ChatGPT-Next-Web](https://github.com/Hk-Gosuto/ChatGPT-Next-Web), измененном [Hk-Gosuto](https://github.com/Hk-Gosuto) и созданном [Yidadaa](https://github.com/Yidadaa). Он имеет больше функций онлайн, чем оригинальная версия.<br>Я не могу себе позволить купить мастер-класс с несколькими ключами, поэтому я использовал токены Share Token и Pool Token от [pengzhile](https://github.com/pengzhile). Теоретически, это может быть использовано одновременно до 6 человек.<br>Переведенные учетные записи и пароли OpenAI:<br>j.ale.ig.h.jphh.d.p97.10.9@gmail.com / qw2RuYz$tg1<br>s.ne.edi.dh.e99.3.20.9@gmail.com / srd5YFrw2*ch0<br>co.b.b.fawo.yj0.04.469@gmail.com / @uyHSzEEXZaz<br>stil.tn.er.jygo36.4.1@gmail.com / d%AMmeZpvNt<br>cob.bfa.woy.j.0.0.4.469@gmail.com / RQc!areDgNU<br>j.a.l.eig.h.jphh.dp97.1.0.9@gmail.com / 9H^Ez1b0wCB<br>Переведенные ключи OpenAI API:<br>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 / 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 / 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 / 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 / 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 / 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",
    Error: "Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.",
    Prompt: {
      History: (content: string) =>
        "Это краткое содержание истории чата между ИИ и пользователем: " +
        content,
      Topic:
        "Пожалуйста, создайте заголовок из четырех или пяти слов, который кратко описывает нашу беседу, без введения, знаков пунктуации, кавычек, точек, символов или дополнительного текста. Удалите кавычки.",
      Summarize:
        "Кратко изложите нашу дискуссию в 200 словах или менее для использования в будущем контексте.",
    },
  },
  Copy: {
    Success: "Скопировано в буфер обмена",
    Failed:
      "Не удалось скопировать, пожалуйста, предоставьте разрешение на доступ к буферу обмена",
  },
  Context: {
    Toast: (x: any) => `С ${x} контекстными подсказками`,
    Edit: "Контекстные и памятные подсказки",
    Add: "Добавить подсказку",
  },
  Plugin: {
    Name: "Плагин",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон подсказки",
      SubTitle: (count: number) => `${count} шаблонов подсказок`,
      Search: "Поиск шаблонов",
      Create: "Создать",
    },
    Item: {
      Info: (count: number) => `${count} подсказок`,
      Chat: "Чат",
      View: "Просмотр",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердить удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактирование шаблона подсказки ${
          readonly ? "(только для чтения)" : ""
        }`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
    Config: {
      Avatar: "Аватар бота",
      Name: "Имя бота",
    },
  },
  NewChat: {
    Return: "Вернуться",
    Skip: "Пропустить",
    Title: "Выберите маску",
    SubTitle: "Общайтесь с душой за маской",
    More: "Найти еще",
    NotShow: "Не показывать снова",
    ConfirmNoShow:
      "Подтвердите отключение? Вы можете включить это позже в настройках.",
  },

  UI: {
    Confirm: "Подтвердить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Create: "Создать",
    Edit: "Редактировать",
  },
};

export default ru;
