import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const it: LocaleType = {
  WIP: "Work in progress...",
  Error: {
    Unauthorized:
      "Accesso non autorizzato, inserire il codice di accesso nella pagina delle impostazioni.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messaggi`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messaggi con ChatGPT`,
    Actions: {
      ChatList: "Vai alla Chat List",
      CompressedHistory: "Prompt di memoria della cronologia compressa",
      Export: "Esportazione di tutti i messaggi come Markdown",
      Copy: "Copia",
      Stop: "Stop",
      Retry: "Riprova",
      Delete: "Delete",
    },
    Rename: "Rinomina Chat",
    Typing: "Typing…",
    Input: (submitKey: string) => {
      var inputHints = `Scrivi qualcosa e premi ${submitKey} per inviare`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", premi Shift + Enter per andare a capo";
      }
      return inputHints;
    },
    Send: "Invia",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "Tutti i messaggi",
    Copy: "Copia tutto",
    Download: "Scarica",
    MessageFromYou: "Messaggio da te",
    MessageFromChatGPT: "Messaggio da ChatGPT",
  },
  Memory: {
    Title: "Prompt di memoria",
    EmptyContent: "Vuoto.",
    Copy: "Copia tutto",
    Send: "Send Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Ripristinare cancellerà la conversazione corrente e la cronologia di memoria. Sei sicuro che vuoi riavviare?",
  },
  Home: {
    NewChat: "Nuova Chat",
    DeleteChat: "Confermare la cancellazione della conversazione selezionata?",
    DeleteToast: "Chat Cancellata",
    Revert: "Revert",
  },
  Settings: {
    Title: "Impostazioni",
    SubTitle: "Tutte le impostazioni",
    Actions: {
      ClearAll: "Cancella tutti i dati",
      ResetAll: "Resetta tutte le impostazioni",
      Close: "Chiudi",
      ConfirmResetAll: "Sei sicuro vuoi cancellare tutte le impostazioni?",
      ConfirmClearAll: "Sei sicuro vuoi cancellare tutte le chat?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tutte le lingue",
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
      Title: "Dimensione carattere",
      SubTitle: "Regolare la dimensione dei caratteri del contenuto della chat",
    },
    Update: {
      Version: (x: string) => `Versione: ${x}`,
      IsLatest: "Ultima versione",
      CheckUpdate: "Controlla aggiornamenti",
      IsChecking: "Sto controllando gli aggiornamenti...",
      FoundUpdate: (x: string) => `Trovata nuova versione: ${x}`,
      GoToUpdate: "Aggiorna",
    },
    SendKey: "Tasto invia",
    Theme: "Tema",
    TightBorder: "Schermo intero",
    SendPreviewBubble: {
      Title: "Anteprima di digitazione",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Disabilita l'auto completamento",
        SubTitle: "Input / per attivare il completamento automatico",
      },
      List: "Elenco dei suggerimenti",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Modifica",
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
      Title: "Conteggio dei messaggi allegati",
      SubTitle: "Numero di messaggi inviati allegati per richiesta",
    },
    CompressThreshold: {
      Title: "Soglia di compressione della cronologia",
      SubTitle:
        "Comprimerà se la lunghezza dei messaggi non compressi supera il valore",
    },
    Token: {
      Title: "API Key",
      SubTitle:
        "Utilizzare la chiave per ignorare il limite del codice di accesso",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Bilancio Account",
      SubTitle(used: any, total: any) {
        return `Attualmente usato in questo mese $${used}, soglia massima $${total}`;
      },
      IsChecking: "Controllando...",
      Check: "Controlla ancora",
      NoAccess: "Inserire la chiave API per controllare il saldo",
    },
    AccessCode: {
      Title: "Codice d'accesso",
      SubTitle: "Controllo d'accesso abilitato",
      Placeholder: "Inserisci il codice d'accesso",
    },
    Model: "Modello GPT",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Un valore maggiore rende l'output più casuale",
    },
    MaxTokens: {
      Title: "Token massimi",
      SubTitle: "Lunghezza massima dei token in ingresso e dei token generati",
    },
    PresencePenlty: {
      Title: "Penalità di presenza",
      SubTitle:
        "Un valore maggiore aumenta la probabilità di parlare di nuovi argomenti",
    },
  },
  Store: {
    DefaultTopic: "Nuova conversazione",
    BotHello: "Sito web di ChatGPT di Xinxin<br>Entrambi i siti utilizzano lo stesso repository, pertanto i messaggi non possono essere visualizzati separatamente. Ti prego di capire.<br>Se ti trovi nel sito di backup:<br>Questo sito è solo per uso personale. Per favore, visita il [sito di prova gratuito](https://free.gpt.xinxin2021.tk).<br>Se ti trovi nel sito di prova gratuito:<br>Questo servizio si basa su [ChatGPT-Next-Web](https://github.com/Hk-Gosuto/ChatGPT-Next-Web), modificato da [Hk-Gosuto](https://github.com/Hk-Gosuto) e realizzato da [Yidadaa](https://github.com/Yidadaa). Offre funzionalità online aggiuntive rispetto alla versione originale.<br>Non posso permettermi di acquistare il tutorial delle chiavi multiple del maestro, quindi ho utilizzato i token di condivisione e di gruppo di [pengzhile](https://github.com/pengzhile), il che teoricamente consente l'uso simultaneo di fino a 6 persone.<br>Account e password OpenAI riprodotti:<br>j.ale.ig.h.jphh.d.p97.10.9@gmail.com / qw2RuYz$tg1<br>s.ne.edi.dh.e99.3.20.9@gmail.com / srd5YFrw2*ch0<br>co.b.b.fawo.yj0.04.469@gmail.com / @uyHSzEEXZaz<br>stil.tn.er.jygo36.4.1@gmail.com / d%AMmeZpvNt<br>cob.bfa.woy.j.0.0.4.469@gmail.com / RQc!areDgNU<br>j.a.l.eig.h.jphh.dp97.1.0.9@gmail.com / 9H^Ez1b0wCB<br>Chiave API OpenAI riprodotta:<br>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 / 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 / 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 / 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 / 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 / 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",
    Error: "Qualcosa è andato storto, riprova più tardi.",
    Prompt: {
      History: (content: string) =>
        "Questo è un riassunto della cronologia delle chat tra l'IA e l'utente:" +
        content,
      Topic:
        "Si prega di generare un titolo di quattro o cinque parole che riassuma la nostra conversazione senza alcuna traccia, punteggiatura, virgolette, punti, simboli o testo aggiuntivo. Rimuovere le virgolette",
      Summarize:
        "Riassumi brevemente la nostra discussione in 200 caratteri o meno per usarla come spunto per una futura conversazione.",
    },
  },
  Copy: {
    Success: "Copiato sugli appunti",
    Failed:
      "Copia fallita, concedere l'autorizzazione all'accesso agli appunti",
  },
  Context: {
    Toast: (x: any) => `Con ${x} prompts contestuali`,
    Edit: "Prompt contestuali e di memoria",
    Add: "Aggiungi altro",
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

export default it;
