package Repository;
import Entity.Card;
import Entity.WordType;

import java.util.List;

public interface CardRepositoryInterface {
    List<Card> findAll();
    Card findById(int id);
    Card save(Card card);
    String delete(Card card);
    Card update(Card card);
    Card findByWord(String word);
    Card findByTranslation(String translation);
    Card findByType(WordType type);
}
