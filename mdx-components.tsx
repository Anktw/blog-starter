import { A as a } from "@/components/a"
import { P as p } from "@/components/p"
import { H1 as h1 } from "@/components/h1"
import { H2 as h2 } from "@/components/h2"
import { H3 as h3 } from "@/components/h3"
import { OL as ol } from "@/components/ol"
import { UL as ul } from "@/components/ul"
import { LI as li } from "@/components/li"
import { HR as hr } from "@/components/hr"
import { Image } from "@/components/image"
import { Code as code } from "@/components/code"
import { Figure } from "@/components/figure"
import { Snippet } from "@/components/snippet"
import { Caption } from "@/components/caption"
import { Callout } from "@/components/callout"
import { Ref, FootNotes, FootNote } from "@/components/footnotes"
import { Blockquote as blockquote } from "@/components/blockquote"
import { Spacer } from "@/components/spacer"
import { YouTube } from "@/components/youtube";
import { Terminal } from "@/components/terminal";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1, 
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    Image,
    code,
    pre: Snippet,
    blockquote,
    Figure,
    Snippet,
    Caption,
    Callout,
    Ref,    FootNotes,
    FootNote,
    Spacer,
    YouTube,
    Terminal,
  };
}