<template>
  <v-card>
    <v-card-title>
      <user-chip :user="comment.user" />
      <v-spacer />
      {{ comment.createdAt | dateTime }}
    </v-card-title>
    <v-card-text>
      {{ comment.text }}
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-badge
        v-if="comment.commentsCount > 0"
        color="greyBlue"
        :content="comment.commentsCount"
        overlap
      >
        <v-btn
          v-if="comment.commentsCount > 0"
          right
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
        </v-btn>
      </v-badge>
      <comment-create-button
        :comment-id="comment.id"
        @reload="$emit('reload')"
      />
    </v-card-actions>
    <v-card-text class="pr-0 pb-0">
      <v-expand-transition>
        <div v-show="show">
          <child-comment-card
            v-for="c in comment.comments"
            :key="c.id"
            :comment="c"
            @reload="$emit('reload')"
          />
        </div>
      </v-expand-transition>
    </v-card-text>
  </v-card>
</template>

<script>
import UserChip from '@/components/users/UserChip';
import CommentCreateButton from '@/components/comments/CommentCreateButton';
import ChildCommentCard from '@/components/comments/CommentCard';

export default {
  components: {
    UserChip,
    CommentCreateButton,
    ChildCommentCard
  },
  props: {
    comment: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isLoading: false,
      show: false,
    };
  },
  methods: {}
};
</script>
