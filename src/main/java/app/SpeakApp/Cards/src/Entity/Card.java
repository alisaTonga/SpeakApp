package Entity;

public class Card {
    private Long idCard;
    private String word;
    private String translation;
    private WordType wordType;
    private String example;
    private String notes;

    public Card(Long idCard, String word, String translation, WordType wordType, String example, String notes) {
        this.idCard = idCard;
        this.word = word;
        this.translation = translation;
        this.wordType = wordType;
        this.example = example;
        this.notes = notes;
    }

    public Card(String word, String translation, WordType wordType, String example, String notes) {
        this.word = word;
        this.translation = translation;
        this.wordType = wordType;
        this.example = example;
        this.notes = notes;
    }

    public Card(String word, String translation, WordType wordType) {
        this.word = word;
        this.translation = translation;
        this.wordType = wordType;
    }

    public Card(String word, String translation, WordType wordType, String example) {
        this.word = word;
        this.translation = translation;
        this.wordType = wordType;
        this.example = example;
    }

    public Long getIdCard() {
        return idCard;
    }

    public String getWord() {
        return word;
    }

    public String getTranslation() {
        return translation;
    }

    public WordType getWordType() {
        return wordType;
    }

    public String getExample() {
        return example;
    }

    public String getNotes() {
        return notes;
    }

    public void setIdCard(Long idCard) {
        this.idCard = idCard;
    }
}
