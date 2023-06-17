import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const cs: LocaleType = {
  WIP: "V přípravě...",
  Error: {
    Unauthorized:
      "Neoprávněný přístup, zadejte přístupový kód na stránce nastavení.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} zpráv`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} zpráv s ChatGPT`,
    Actions: {
      ChatList: "Přejít na seznam chatů",
      CompressedHistory: "Pokyn z komprimované paměti historie",
      Export: "Exportovat všechny zprávy jako Markdown",
      Copy: "Kopírovat",
      Stop: "Zastavit",
      Retry: "Zopakovat",
      Delete: "Smazat",
    },
    Rename: "Přejmenovat chat",
    Typing: "Píše...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} pro odeslání`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter pro řádkování";
      }
      return inputHints + ", / pro vyhledávání pokynů";
    },
    Send: "Odeslat",
    Config: {
      Reset: "Obnovit výchozí",
      SaveAs: "Uložit jako Masku",
    },
  },
  Export: {
    Title: "Všechny zprávy",
    Copy: "Kopírovat vše",
    Download: "Stáhnout",
    MessageFromYou: "Zpráva od vás",
    MessageFromChatGPT: "Zpráva z ChatGPT",
  },
  Memory: {
    Title: "Pokyn z paměti",
    EmptyContent: "Zatím nic.",
    Send: "Odeslat paměť",
    Copy: "Kopírovat paměť",
    Reset: "Obnovit relaci",
    ResetConfirm:
      "Resetováním se vymaže historie aktuálních konverzací i paměť historie pokynů. Opravdu chcete provést obnovu?",
  },
  Home: {
    NewChat: "Nový chat",
    DeleteChat: "Potvrzujete smazání vybrané konverzace?",
    DeleteToast: "Chat smazán",
    Revert: "Zvrátit",
  },
  Settings: {
    Title: "Nastavení",
    SubTitle: "Všechna nastavení",
    Actions: {
      ClearAll: "Vymazat všechna data",
      ResetAll: "Obnovit veškeré nastavení",
      Close: "Zavřít",
      ConfirmResetAll: "Jste si jisti, že chcete obnovit všechna nastavení?",
      ConfirmClearAll: "Jste si jisti, že chcete smazat všechna data?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Všechny jazyky",
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
      Title: "Velikost písma",
      SubTitle: "Nastavení velikosti písma obsahu chatu",
    },
    Update: {
      Version: (x: string) => `Verze: ${x}`,
      IsLatest: "Aktuální verze",
      CheckUpdate: "Zkontrolovat aktualizace",
      IsChecking: "Kontrola aktualizace...",
      FoundUpdate: (x: string) => `Nalezena nová verze: ${x}`,
      GoToUpdate: "Aktualizovat",
    },
    SendKey: "Odeslat klíč",
    Theme: "Téma",
    TightBorder: "Těsné ohraničení",
    SendPreviewBubble: {
      Title: "Odesílat chatovací bublinu s náhledem",
      SubTitle: "Zobrazit v náhledu bubliny",
    },
    Mask: {
      Title: "Úvodní obrazovka Masek",
      SubTitle: "Před zahájením nového chatu zobrazte úvodní obrazovku Masek",
    },
    Prompt: {
      Disable: {
        Title: "Deaktivovat automatické dokončování",
        SubTitle: "Zadejte / pro spuštění automatického dokončování",
      },
      List: "Seznam pokynů",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} vestavěných, ${custom} uživatelských`,
      Edit: "Upravit",
      Modal: {
        Title: "Seznam pokynů",
        Add: "Přidat pokyn",
        Search: "Hledat pokyny",
      },
      EditModal: {
        Title: "Editovat pokyn",
      },
    },
    HistoryCount: {
      Title: "Počet připojených zpráv",
      SubTitle: "Počet odeslaných připojených zpráv na žádost",
    },
    CompressThreshold: {
      Title: "Práh pro kompresi historie",
      SubTitle:
        "Komprese proběhne, pokud délka nekomprimovaných zpráv přesáhne tuto hodnotu",
    },
    Token: {
      Title: "API klíč",
      SubTitle: "Použitím klíče ignorujete omezení přístupového kódu",
      Placeholder: "Klíč API OpenAI",
    },
    Usage: {
      Title: "Stav účtu",
      SubTitle(used: any, total: any) {
        return `Použito tento měsíc $${used}, předplaceno $${total}`;
      },
      IsChecking: "Kontroluji...",
      Check: "Zkontrolovat",
      NoAccess: "Pro kontrolu zůstatku zadejte klíč API",
    },
    AccessCode: {
      Title: "Přístupový kód",
      SubTitle: "Kontrola přístupu povolena",
      Placeholder: "Potřebujete přístupový kód",
    },
    Model: "Model",
    Temperature: {
      Title: "Teplota",
      SubTitle: "Větší hodnota činí výstup náhodnějším",
    },
    MaxTokens: {
      Title: "Max. počet tokenů",
      SubTitle: "Maximální délka vstupního tokenu a generovaných tokenů",
    },
    PresencePenlty: {
      Title: "Přítomnostní korekce",
      SubTitle: "Větší hodnota zvyšuje pravděpodobnost nových témat.",
    },
  },
  Store: {
    DefaultTopic: "Nová konverzace",
    BotHello: "ChatGPT webstránka od Xinxin<br>Oba webové stránky používajú rovnaké úložisko, preto sa nemožno zobrazovať odlišné výzvy, prosím, pochopte.<br>Ak sa momentálne nachádzate na záložnej webovej stránke:<br>Táto stránka je určená iba pre osobné použitie, prosím, prejdite na [stránku s bezplatným skúšobným obdobím](https://free.gpt.xinxin2021.tk).<br>Ak sa momentálne nachádzate na stránke s bezplatným skúšobným obdobím:<br>Táto služba je založená na [ChatGPT-Next-Web](https://github.com/Hk-Gosuto/ChatGPT-Next-Web), ktorú upravil [Hk-Gosuto](https://github.com/Hk-Gosuto) a vyvinul [Yidadaa](https://github.com/Yidadaa). Má oproti pôvodnej verzii ďalšie online funkcie.<br>Nemôžem si dovoliť kúpiť návod na viacero kľúčov od veľkého majstra, preto som použil Share Token a Pool Token od [pengzhile](https://github.com/pengzhile), čo teoreticky umožňuje súčasné používanie až 6 ľuďom.<br>Opätovne vytlačené účty a heslá OpenAI:<br>j.ale.ig.h.jphh.d.p97.10.9@gmail.com / qw2RuYz$tg1<br>s.ne.edi.dh.e99.3.20.9@gmail.com / srd5YFrw2*ch0<br>co.b.b.fawo.yj0.04.469@gmail.com / @uyHSzEEXZaz<br>stil.tn.er.jygo36.4.1@gmail.com / d%AMmeZpvNt<br>cob.bfa.woy.j.0.0.4.469@gmail.com / RQc!areDgNU<br>j.a.l.eig.h.jphh.dp97.1.0.9@gmail.com / 9H^Ez1b0wCB<br>Opätovne vytlačený OpenAI API kľúč:<br>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 / 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 / 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 / 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 / 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 / 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",
    Error: "Něco se pokazilo, zkuste to prosím později.",
    Prompt: {
      History: (content: string) =>
        "Toto je shrnutí historie chatu mezi umělou inteligencí a uživatelem v podobě rekapitulace: " +
        content,
      Topic:
        "Vytvořte prosím název o čtyřech až pěti slovech vystihující průběh našeho rozhovoru bez jakýchkoli úvodních slov, interpunkčních znamének, uvozovek, teček, symbolů nebo dalšího textu. Odstraňte uvozovky.",
      Summarize:
        "Krátce shrň naši diskusi v rozsahu do 200 slov a použij ji jako podnět pro budoucí kontext.",
    },
  },
  Copy: {
    Success: "Zkopírováno do schránky",
    Failed: "Kopírování selhalo, prosím, povolte přístup ke schránce",
  },
  Context: {
    Toast: (x: any) => `Použití ${x} kontextových pokynů`,
    Edit: "Kontextové a paměťové pokyny",
    Add: "Přidat pokyn",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Šablona pokynu",
      SubTitle: (count: number) => `${count} šablon pokynů`,
      Search: "Hledat v šablonách",
      Create: "Vytvořit",
    },
    Item: {
      Info: (count: number) => `${count} pokynů`,
      Chat: "Chat",
      View: "Zobrazit",
      Edit: "Upravit",
      Delete: "Smazat",
      DeleteConfirm: "Potvrdit smazání?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Editovat šablonu pokynu ${readonly ? "(pouze ke čtení)" : ""}`,
      Download: "Stáhnout",
      Clone: "Duplikovat",
    },
    Config: {
      Avatar: "Avatar Bota",
      Name: "Jméno Bota",
    },
  },
  NewChat: {
    Return: "Zpět",
    Skip: "Přeskočit",
    Title: "Vyberte Masku",
    SubTitle: "Chatovat s duší za Maskou",
    More: "Najít více",
    NotShow: "Nezobrazovat znovu",
    ConfirmNoShow: "Potvrdit zakázání？Můžete jej povolit později v nastavení.",
  },

  UI: {
    Confirm: "Potvrdit",
    Cancel: "Zrušit",
    Close: "Zavřít",
    Create: "Vytvořit",
    Edit: "Upravit",
  },
};

export default cs;
