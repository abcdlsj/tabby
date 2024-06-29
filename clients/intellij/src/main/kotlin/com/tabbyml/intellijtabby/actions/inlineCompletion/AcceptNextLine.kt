package com.tabbyml.intellijtabby.actions.inlineCompletion

import com.intellij.openapi.editor.Caret
import com.intellij.openapi.editor.Editor
import com.tabbyml.intellijtabby.completion.InlineCompletionService

class AcceptNextLine : InlineCompletionAction(object : InlineCompletionActionHandler {
  override fun doExecute(editor: Editor, caret: Caret?, inlineCompletionService: InlineCompletionService) {
    inlineCompletionService.accept(editor, caret?.offset, InlineCompletionService.AcceptType.NEXT_LINE)
  }
})