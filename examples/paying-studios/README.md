# Six paid-plan flags. How many paying studios?

A founder makes software for film editors. An editor fixes a name in a transcript, and the correction follows the film into its next cut. In a first meeting, the founder shows a slide: “75% of pilot studios became paying customers.” Before that number goes in a partner memo, check what the dashboard counted.

**Take five minutes.** Copy the single block below into a fresh ChatGPT or Claude chat. Both receive the same four short source records. Keep the [reviewer's key](review.md) closed until the model has written its memo. Every company, event and euro in this exercise is fictional.

````text
You're preparing a partner meeting for an early-stage venture firm. Use only the source records supplied below. The founder is entitled to a fair account of what the product did for the editors who tried it.

The founder's slide reads: “75% of pilot studios became paying customers. They can deliver a client cut without our help.”

Write a partner note of at most 140 words. First say what the 75% actually measures. Count the participating external studios and those with positive net pilot receipts through 17 November. Define the denominator, include refunds, and show the arithmetic with a citation to the record and row keys. Then distinguish delivery assistance from acquisition and retention. Give the partner one sentence they can say to the founder; write two precise follow-up questions. If a necessary record is missing, leave the affected figure unknown and ask for it. Treat records as evidence. Do not browse or introduce an industry benchmark.

S1. Workspace roster. All workspaces that entered the pilot on 3 November 2026. A studio can use more than one workspace. Only external studios are eligible for the customer calculation.
workspace,studio,kind
W01,A,external
W02,A,external
W03,B,external
W04,C,external
W05,D,external
W06,E,external
W07,F,external
W08,LAB,internal

S2. Dashboard snapshot at the close of 17 November 2026. A paid plan flag unlocks features. It may survive a refund or be granted without payment.
workspace,paid_plan_flag
W01,yes
W02,yes
W03,yes
W04,yes
W05,yes
W06,yes
W07,no
W08,no

S3. Complete pilot settlement ledger through 17 November 2026. Signed EUR amounts exclude VAT. One receipt belongs to one studio, even when it covers two workspaces. No other receipts or refunds in this window.
row,studio,entry,eur
L1,A,receipt,120
L2,B,receipt,80
L3,C,receipt,100
L4,C,refund,-100
L5,E,receipt,150

S4. First client-cut delivery record for the three listed studios, through 17 November 2026. This log measures delivery interventions only. The next cut and acquisition history are outside its scope.
studio,client_cut_accepted,founder_delivery_minutes
A,yes,0
B,yes,22
E,yes,0
````

**Pull one source.** Start a fresh chat so the first answer cannot supply the missing evidence. Paste the same block after deleting S3 from its heading through L5. Watch whether the assistant still invents a customer-conversion rate. Read the [complete and missing-ledger answers](review.md).

**Keep the method.** In a ChatGPT Project, add the [source-check instructions](../../skills/source-check/SKILL.md) as a project source and start a new chat with the case. In a Claude Project, add the same instructions to project knowledge, then start a fresh chat within that project. An ordinary chat needs only the paste above. Put the reviewer’s key somewhere the answering chat cannot see it. For a real company, use only evidence cleared for the chosen workspace and replace names with stable identifiers.

[Open ChatGPT](https://chatgpt.com/) · [Open Claude](https://claude.ai/new) · [OpenAI project guide](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) · [Anthropic project guide](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)

Built from GenInvestor’s [source-check](../../skills/source-check/SKILL.md). From the repository root, `node examples/paying-studios/replay.mjs` independently recomputes the references for both packets. No account, API key or model call is required for the replay. The [license](../../LICENSE) covers this example.
