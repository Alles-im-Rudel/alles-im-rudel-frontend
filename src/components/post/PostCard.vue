<template>
  <base-card height="100%" style="display: flex; flex-direction: column">
    <v-img
        v-if="post.thumbnails && post.thumbnails[0]"
        class="black--text align-end"
        :src="post.thumbnails[0].thumbnail"
    >
      <v-card-title style="background-color: rgba(255, 255, 255, 0.2)">
        {{ post.thumbnails[0].title }}
      </v-card-title>
    </v-img>
    <v-card-title>
      {{ post.title }}
      <v-spacer />
      <user-chip :user="post.user" />
    </v-card-title>
    <v-divider />
    <v-card-text class="pa-0">
      <div class="ql-snow">
        <div class="ql-editor" style="min-height: unset !important;" v-html="text" />
      </div>
    </v-card-text>
    <v-card-text justify="center" v-if="post.tags.length > 0">
      <post-tags :tags="post.tags" />
    </v-card-text>
    <v-card-actions>
      <v-badge
          v-if="post.commentsCount > 0"
          color="greyBlue"
          :content="post.commentsCount"
          overlap
      >
        <v-chip
            color="darkGrey"
            text-color="white"
        >
          Kommentare
        </v-chip>
      </v-badge>
      {{ post.createdAt | dateTime }}
      <v-spacer />
      <show-full-post-button :post-id="post.id" @reload="$emit('reload')" />
    </v-card-actions>
  </base-card>
</template>

<script>
import UserChip from '@/components/users/UserChip';
import PostTags from '@/components/post/PostTags';
import ShowFullPostButton from "@/components/post/ShowFullPostButton";

export default {
  components: {
    UserChip,
    PostTags,
    ShowFullPostButton
  },
  props: {
    post: {
      required: true,
      type: Object
    },
    textLength: {
      required: false,
      default: () => 200
    }
  },
  computed: {
    text() {
      return this.post.text.length > this.textLength ? this.post.text.substring(0, this.textLength - 3) + "..." : this.post.text
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {}
}
</script>